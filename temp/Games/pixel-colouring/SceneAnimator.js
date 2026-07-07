
const Ease = {
    linear:     t => t,
    outCubic:   t => 1 - Math.pow(1 - t, 3),
    inCubic:    t => t * t * t,
    inOutCubic: t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
    inBack:     t => 2.70158 * t * t * t - 1.70158 * t * t,
    outBack:    t => 1 + 2.70158 * Math.pow(t - 1, 3) + 1.70158 * Math.pow(t - 1, 2),
    outElastic: t => (t === 0 || t === 1)
        ? t
        : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * (2 * Math.PI / 3)) + 1,
};
 
export class SceneAnimator {
    /**
     * @param {Application} app - the Pixi Application
     * @param {Container} target - container the effects act on
     * @param {object} [opts]
     * @param {boolean} [opts.autoTick=true] - self-drive via app.ticker.
     *        Set false to drive manually: call fx.update(deltaMS) yourself.
     * @param {boolean} [opts.keepVisible=false] - if true, every effect
     *        auto-calls reset() on completion, so the container is always
     *        visible (alpha 1, no filters/mask) when the callback fires.
     */
    constructor(app, target, { autoTick = true, keepVisible = false } = {}) {
        this.app = app;
        this.target = target;
        this.anim = null;
        this.keepVisible = keepVisible;
 
        // lazily-created resources
        this.irisMask = null;
        this.waveFilter = null;
        this.pixelFilter = null;
        this.dissolveFilter = null;
 
        this._tick = null;
        if (autoTick) {
            this._tick = ticker => this.update(ticker.deltaMS);
            this.app.ticker.add(this._tick);
        }
    }
 
    get isAnimating() {
        return this.anim !== null;
    }
 
    /** Core runner. One animation at a time; new one replaces old. */
    play(duration, easeFn, onProgress, onComplete = null) {
        this.anim = { elapsed: 0, duration, easeFn, onProgress, onComplete };
        return this;
    }
 
    /** Advance by milliseconds. Called automatically when autoTick. */
    update(deltaMS) {
        if (!this.anim) return;
        this.anim.elapsed += deltaMS;
        const t = Math.min(this.anim.elapsed / this.anim.duration, 1);
        this.anim.onProgress(this.anim.easeFn(t));
        if (t >= 1) {
            const done = this.anim.onComplete;
            this.anim = null;
            if (this.keepVisible) this.reset(); // always leave it visible
            if (done) done();
        }
    }
 
    /** Stop mid-animation (no onComplete fired). */
    cancel() {
        this.anim = null;
        return this;
    }
 
    /** Restore target to a clean visible state (for scene reuse). */
    reset() {
        const c = this.target;
        c.alpha = 1;
        c.visible = true;
        c.rotation = 0;
        c.filters = null;
        c.mask = null;
        return this;
    }
 
    /** Remove ticker hook + GPU resources. Call on scene teardown. */
    destroy() {
        this.cancel();
        if (this._tick) this.app.ticker.remove(this._tick);
        if (this.irisMask) { this.irisMask.destroy(); this.irisMask = null; }
        for (const f of ['waveFilter', 'pixelFilter', 'dissolveFilter',
                         'blurFilter', 'flashFilter', 'rgbFilter']) {
            if (this[f]) { this[f].destroy(); this[f] = null; }
        }
    }
 
    // ---- internal: scale around screen center, keeping it fixed ----
    _scaleAroundCenter(s) {
        const c = this.target;
        const cx = this.app.screen.width / 2;
        const cy = this.app.screen.height / 2;
        const wx = (cx - c.x) / c.scale.x;
        const wy = (cy - c.y) / c.scale.y;
        c.scale.set(s);
        c.x = cx - wx * s;
        c.y = cy - wy * s;
    }
 
    // ═══════════════════════ EXIT EFFECTS ═══════════════════════
 
    /** Slow zoom out + fade */
    exitZoomOut(onDone, target = 0.5, duration = 3000) {
        const start = this.target.scale.x;
        return this.play(duration, Ease.outCubic, e => {
            this._scaleAroundCenter(start + (target - start) * e);
            this.target.alpha = 1 - e;
        }, onDone);
    }
 
    /** Punch-through: zoom IN past camera + fade */
    exitPunch(onDone, target = 3, duration = 700) {
        const start = this.target.scale.x;
        return this.play(duration, Ease.inCubic, e => {
            this._scaleAroundCenter(start + (target - start) * e);
            this.target.alpha = 1 - e;
        }, onDone);
    }
 
    /** Cartoon shrink + spin into a point */
    exitShrinkSpin(onDone, duration = 1000) {
        const start = this.target.scale.x;
        return this.play(duration, Ease.inBack, e => {
            this._scaleAroundCenter(Math.max(start * (1 - e), 0.001));
            this.target.rotation = e * Math.PI;
        }, () => {
            this.target.rotation = 0;
            if (onDone) onDone();
        });
    }
 
    /** Slide off-screen left + slight zoom */
    exitSlide(onDone, duration = 800) {
        const c = this.target;
        const startX = c.x;
        const startScale = c.scale.x;
        const offX = -this.app.screen.width * 1.2;
        return this.play(duration, Ease.inOutCubic, e => {
            c.x = startX + (offX - startX) * e;
            c.scale.set(startScale * (1 - 0.2 * e));
        }, onDone);
    }
 
    /** Iris wipe: circle mask closes to nothing */
    exitIris(onDone, duration = 1200) {
        const cx = this.app.screen.width / 2;
        const cy = this.app.screen.height / 2;
        const maxR = Math.hypot(cx, cy) * 1.05;
 
        if (!this.irisMask) {
            this.irisMask = new PIXI.Graphics();
            this.app.stage.addChild(this.irisMask);
        }
        this.target.mask = this.irisMask;
 
        return this.play(duration, Ease.inOutCubic, e => {
            this.irisMask.clear().circle(cx, cy, maxR * (1 - e)).fill(0xffffff);
        }, () => {
            this.target.visible = false;
            this.target.mask = null;
            if (onDone) onDone();
        });
    }
 
    /** Shake: decaying random offsets, snaps back to base */
    shake(onDone, intensity = 12, duration = 400) {
        const c = this.target;
        const bx = c.x, by = c.y;
        return this.play(duration, Ease.linear, e => {
            const mag = intensity * (1 - e);
            c.x = bx + (Math.random() * 2 - 1) * mag;
            c.y = by + (Math.random() * 2 - 1) * mag;
        }, () => {
            c.x = bx; c.y = by;
            if (onDone) onDone();
        });
    }
 
    /** Zoom out → small shake → callback */
    exitZoomShake(onDone, target = 0.5, zoomDuration = 2000) {
        const start = this.target.scale.x;
        return this.play(zoomDuration, Ease.outCubic, e => {
            this._scaleAroundCenter(start + (target - start) * e);
        }, () => this.shake(onDone, 10, 350));
    }
 
    /** Wave shake (per-object): children bob, wave travels L → R */
    waveShake(onDone, amp = 10, waves = 2, duration = 900) {
        const kids = this.target.children;
        const baseY = kids.map(k => k.y);
        const w = this.app.screen.width || 1;
        return this.play(duration, Ease.linear, e => {
            const falloff = 1 - e;
            const travel = e * Math.PI * 6;
            for (let i = 0; i < kids.length; i++) {
                const phase = (kids[i].x / w) * Math.PI * 2 * waves;
                kids[i].y = baseY[i] + Math.sin(phase - travel) * amp * falloff;
            }
        }, () => {
            for (let i = 0; i < kids.length; i++) kids[i].y = baseY[i];
            if (onDone) onDone();
        });
    }
 
    /** Wave shake (per-pixel): shader ripple sweeping L → R */
    waveShakeFilter(onDone, amp = 0.015, duration = 900) {
        if (!this.waveFilter) {
            this.waveFilter = new PIXI.Filter({
                glProgram: new PIXI.GlProgram({
                    vertex: PIXI.defaultFilterVert,
                    fragment: `
                        in vec2 vTextureCoord;
                        out vec4 finalColor;
                        uniform sampler2D uTexture;
                        uniform float uTime;
                        uniform float uAmp;
                        uniform float uFreq;
                        void main(void) {
                            vec2 uv = vTextureCoord;
                            uv.y += sin(uv.x * uFreq - uTime) * uAmp;
                            finalColor = texture(uTexture, uv);
                        }
                    `,
                }),
                resources: {
                    waveUniforms: {
                        uTime: { value: 0, type: 'f32' },
                        uAmp:  { value: 0, type: 'f32' },
                        uFreq: { value: 14.0, type: 'f32' },
                    },
                },
            });
        }
        this.target.filters = [this.waveFilter];
        const u = this.waveFilter.resources.waveUniforms.uniforms;
 
        return this.play(duration, Ease.linear, e => {
            u.uTime = e * 20.0;
            u.uAmp = amp * (1 - e);
        }, () => {
            this.target.filters = null;
            if (onDone) onDone();
        });
    }
 
    /** Pixelate out: scene collapses into mosaic blocks + fade */
    exitPixelate(onDone, duration = 1200) {
        if (!this.pixelFilter) {
            this.pixelFilter = new PIXI.Filter({
                glProgram: new PIXI.GlProgram({
                    vertex: PIXI.defaultFilterVert,
                    fragment: `
                        in vec2 vTextureCoord;
                        out vec4 finalColor;
                        uniform sampler2D uTexture;
                        uniform float uBlocks;
                        uniform float uFade;
                        void main(void) {
                            vec2 uv = (floor(vTextureCoord * uBlocks) + 0.5) / uBlocks;
                            finalColor = texture(uTexture, uv) * uFade;
                        }
                    `,
                }),
                resources: {
                    pixUniforms: {
                        uBlocks: { value: 512.0, type: 'f32' },
                        uFade:   { value: 1.0,   type: 'f32' },
                    },
                },
            });
        }
        this.target.filters = [this.pixelFilter];
        const u = this.pixelFilter.resources.pixUniforms.uniforms;
 
        return this.play(duration, Ease.inCubic, e => {
            u.uBlocks = 512.0 * Math.pow(1 - e, 2) + 6.0;
            u.uFade = 1 - e * e;
        }, () => {
            this.target.visible = false;
            this.target.filters = null;
            u.uBlocks = 512.0; u.uFade = 1.0;
            if (onDone) onDone();
        });
    }
 
    /** Noise dissolve: pixels randomly burn away until gone */
    exitDissolve(onDone, duration = 1500) {
        if (!this.dissolveFilter) {
            this.dissolveFilter = new PIXI.Filter({
                glProgram: new PIXI.GlProgram({
                    vertex: PIXI.defaultFilterVert,
                    fragment: `
                        in vec2 vTextureCoord;
                        out vec4 finalColor;
                        uniform sampler2D uTexture;
                        uniform float uThreshold;
                        uniform float uGrid;
                        float hash(vec2 p) {
                            return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
                        }
                        void main(void) {
                            float n = hash(floor(vTextureCoord * uGrid));
                            finalColor = texture(uTexture, vTextureCoord)
                                         * step(uThreshold, n);
                        }
                    `,
                }),
                resources: {
                    disUniforms: {
                        uThreshold: { value: 0.0,   type: 'f32' },
                        uGrid:      { value: 220.0, type: 'f32' },
                    },
                },
            });
        }
        this.target.filters = [this.dissolveFilter];
        const u = this.dissolveFilter.resources.disUniforms.uniforms;
 
        return this.play(duration, Ease.inOutCubic, e => {
            u.uThreshold = e;
        }, () => {
            this.target.visible = false;
            this.target.filters = null;
            u.uThreshold = 0.0;
            if (onDone) onDone();
        });
    }
    // ═══════════════ SEQUENCING + SETTLE EFFECTS ═══════════════
 
    /**
     * Run effects one after another. Each step is a function that
     * receives a `done` callback:
     *   fx.sequence([
     *       d => fx.zoomTo(d, 0.5, 1500),
     *       d => fx.shake(d, 10, 350),
     *   ], () => console.log('all done'));
     */
    sequence(steps, onDone) {
        const run = i => {
            if (i >= steps.length) { if (onDone) onDone(); return; }
            steps[i](() => run(i + 1));
        };
        run(0);
        return this;
    }
 
    /** Plain zoom to a scale (no fade) — building block for combos */
    zoomTo(onDone, target = 0.5, duration = 2000, ease = Ease.outCubic) {
        const start = this.target.scale.x;
        return this.play(duration, ease, e => {
            this._scaleAroundCenter(start + (target - start) * e);
        }, onDone);
    }
 
    /**
     * Compute scale + position so ALL content fits on screen, centered.
     * padding 0.9 = content fills at most 90% of the screen.
     */
    fitParams(padding = 0.9) {
        const b = this.target.getLocalBounds(); // content bounds, unscaled
        const sw = this.app.screen.width;
        const sh = this.app.screen.height;
        const scale = Math.min(
            (sw * padding) / b.width,
            (sh * padding) / b.height,
        );
        // position so the bounds' center lands on the screen center
        const cx = b.x + b.width / 2;
        const cy = b.y + b.height / 2;
        return {
            scale,
            x: sw / 2 - cx * scale,
            y: sh / 2 - cy * scale,
        };
    }
 
    /**
     * Zoom + pan so every object is visible, centered on screen.
     * Set zoomOutOnly=true to never zoom IN (skips if already fits).
     */
    zoomToFit(onDone, padding = 0.9, duration = 1500,
              { zoomOutOnly = false, ease = Ease.outCubic } = {}) {
        const c = this.target;
        let { scale, x, y } = this.fitParams(padding);
 
        if (zoomOutOnly && scale >= c.scale.x) {
            if (onDone) onDone();       // already fits — nothing to do
            return this;
        }
 
        const s0 = c.scale.x, x0 = c.x, y0 = c.y;
        return this.play(duration, ease, e => {
            const s = s0 + (scale - s0) * e;
            c.scale.set(s);
            c.x = x0 + (x - x0) * e;
            c.y = y0 + (y - y0) * e;
        }, onDone);
    }
 
    /** Wobble: decaying rotation swing (pendulum settle).
     *  NOTE: rotates around the container's pivot — set pivot to the
     *  content center or it swings around the top-left corner. */
    wobble(onDone, angle = 0.08, cycles = 4, duration = 700) {
        const base = this.target.rotation;
        return this.play(duration, Ease.linear, e => {
            this.target.rotation =
                base + Math.sin(e * Math.PI * 2 * cycles) * angle * (1 - e);
        }, () => {
            this.target.rotation = base;
            if (onDone) onDone();
        });
    }
 
    /** Pulse: decaying heartbeat scale throb */
    pulse(onDone, amount = 0.06, beats = 2, duration = 600) {
        const start = this.target.scale.x;
        return this.play(duration, Ease.linear, e => {
            const s = start * (1 + Math.sin(e * Math.PI * 2 * beats)
                                   * amount * (1 - e));
            this._scaleAroundCenter(s);
        }, () => {
            this._scaleAroundCenter(start);
            if (onDone) onDone();
        });
    }
 
    /** Flicker: alpha strobes randomly while fading, ends hidden */
    flicker(onDone, duration = 500) {
        return this.play(duration, Ease.linear, e => {
            this.target.alpha = (Math.random() < 0.5 ? 1 : 0.25) * (1 - e);
        }, () => {
            this.target.alpha = 0;
            this.target.visible = false;
            if (onDone) onDone();
        });
    }
 
    // ═══════════════ ZOOM + SETTLE COMBO EXITS ═══════════════
 
    /** Zoom out → per-pixel wave ripple */
    exitZoomWave(onDone, target = 0.5) {
        return this.sequence([
            d => this.zoomTo(d, target, 1800),
            d => this.waveShakeFilter(d, 0.02, 900),
        ], onDone);
    }
 
    /** Zoom out with rubber-band overshoot (single elastic motion) */
    exitZoomBounce(onDone, target = 0.5, duration = 1400) {
        return this.zoomTo(onDone, target, duration, Ease.outElastic);
    }
 
    /** Zoom out → pendulum wobble settle */
    exitZoomWobble(onDone, target = 0.5) {
        return this.sequence([
            d => this.zoomTo(d, target, 1600),
            d => this.wobble(d, 0.07, 4, 800),
        ], onDone);
    }
 
    /** Zoom out → heartbeat pulse */
    exitZoomPulse(onDone, target = 0.5) {
        return this.sequence([
            d => this.zoomTo(d, target, 1600),
            d => this.pulse(d, 0.07, 2, 700),
        ], onDone);
    }
 
    /** Zoom out → shake → dissolve away (three-stage) */
    exitZoomShakeDissolve(onDone, target = 0.6) {
        return this.sequence([
            d => this.zoomTo(d, target, 1500),
            d => this.shake(d, 10, 350),
            d => this.exitDissolve(d, 1000),
        ], onDone);
    }
 
    /** Zoom out → glitchy flicker vanish */
    exitZoomFlicker(onDone, target = 0.5) {
        return this.sequence([
            d => this.zoomTo(d, target, 1500),
            d => this.flicker(d, 500),
        ], onDone);
    }
 
    // ════════ SETTLE BLOCKS (all end visible, back to base) ════════
 
    // non-uniform scale around screen center
    _scaleXYAroundCenter(sx, sy) {
        const c = this.target;
        const cx = this.app.screen.width / 2;
        const cy = this.app.screen.height / 2;
        const wx = (cx - c.x) / c.scale.x;
        const wy = (cy - c.y) / c.scale.y;
        c.scale.set(sx, sy);
        c.x = cx - wx * sx;
        c.y = cy - wy * sy;
    }
 
    /** Jelly squash & stretch: x/y scale oscillate in opposition */
    squashStretch(onDone, amount = 0.12, cycles = 3, duration = 700) {
        const s = this.target.scale.x;
        return this.play(duration, Ease.linear, e => {
            const w = Math.sin(e * Math.PI * 2 * cycles) * amount * (1 - e);
            this._scaleXYAroundCenter(s * (1 + w), s * (1 - w));
        }, () => {
            this._scaleAroundCenter(s);
            if (onDone) onDone();
        });
    }
 
    /** Land: bounces vertically like dropping onto a surface */
    bounceLand(onDone, height = 25, bounces = 3, duration = 700) {
        const c = this.target;
        const by = c.y;
        return this.play(duration, Ease.linear, e => {
            c.y = by - Math.abs(Math.sin(e * Math.PI * bounces))
                       * height * (1 - e);
        }, () => {
            c.y = by;
            if (onDone) onDone();
        });
    }
 
    /** Sway: horizontal pendulum drift that settles */
    sway(onDone, dist = 20, cycles = 2.5, duration = 900) {
        const c = this.target;
        const bx = c.x;
        return this.play(duration, Ease.linear, e => {
            c.x = bx + Math.sin(e * Math.PI * 2 * cycles) * dist * (1 - e);
        }, () => {
            c.x = bx;
            if (onDone) onDone();
        });
    }
 
    /** Blur focus: goes soft then snaps back sharp (built-in filter) */
    blurFocus(onDone, strength = 8, duration = 800) {
        if (!this.blurFilter) this.blurFilter = new PIXI.BlurFilter();
        this.target.filters = [this.blurFilter];
        return this.play(duration, Ease.linear, e => {
            this.blurFilter.strength = Math.sin(e * Math.PI) * strength;
        }, () => {
            this.target.filters = null;
            if (onDone) onDone();
        });
    }
 
    /** Blur ramp up — leaves the blur ATTACHED (pair with blurOut) */
    blurIn(onDone, strength = 8, duration = 600) {
        if (!this.blurFilter) this.blurFilter = new PIXI.BlurFilter();
        this.blurFilter.strength = 0;
        this.target.filters = [this.blurFilter];
        return this.play(duration, Ease.outCubic, e => {
            this.blurFilter.strength = strength * e;
        }, onDone);
    }
 
    /** Blur ramp down from current strength — removes filter at end */
    blurOut(onDone, duration = 600) {
        if (!this.blurFilter) { if (onDone) onDone(); return this; }
        const from = this.blurFilter.strength;
        return this.play(duration, Ease.outCubic, e => {
            this.blurFilter.strength = from * (1 - e);
        }, () => {
            this.target.filters = null;
            if (onDone) onDone();
        });
    }
 
    /** Blur in → zoom out while blurred → refocus clear */
    exitBlurZoomClear(onDone, target = 0.5, strength = 8) {
        return this.sequence([
            d => this.blurIn(d, strength, 600),
            d => this.zoomTo(d, target, 1500),
            d => this.blurOut(d, 600),
        ], onDone);
    }
 
    /** Flash: brightness spikes then returns to normal */
    flash(onDone, brightness = 1.8, duration = 450) {
        if (!this.flashFilter) this.flashFilter = new PIXI.ColorMatrixFilter();
        this.target.filters = [this.flashFilter];
        return this.play(duration, Ease.linear, e => {
            const b = 1 + (brightness - 1) * Math.sin(e * Math.PI);
            this.flashFilter.reset();
            this.flashFilter.brightness(b, false);
        }, () => {
            this.target.filters = null;
            if (onDone) onDone();
        });
    }
 
    /** RGB split glitch burst: channels separate then snap together */
    rgbSplit(onDone, amount = 0.012, duration = 500) {
        if (!this.rgbFilter) {
            this.rgbFilter = new PIXI.Filter({
                glProgram: new PIXI.GlProgram({
                    vertex: PIXI.defaultFilterVert,
                    fragment: `
                        in vec2 vTextureCoord;
                        out vec4 finalColor;
                        uniform sampler2D uTexture;
                        uniform float uOffset;
                        void main(void) {
                            float r = texture(uTexture, vTextureCoord - vec2(uOffset, 0.0)).r;
                            vec4 g = texture(uTexture, vTextureCoord);
                            float b = texture(uTexture, vTextureCoord + vec2(uOffset, 0.0)).b;
                            finalColor = vec4(r, g.g, b, g.a);
                        }
                    `,
                }),
                resources: {
                    rgbUniforms: { uOffset: { value: 0, type: 'f32' } },
                },
            });
        }
        this.target.filters = [this.rgbFilter];
        const u = this.rgbFilter.resources.rgbUniforms.uniforms;
        return this.play(duration, Ease.linear, e => {
            u.uOffset = amount * (1 - e) * (0.6 + Math.random() * 0.4);
        }, () => {
            u.uOffset = 0;
            this.target.filters = null;
            if (onDone) onDone();
        });
    }
 
    // ════════ ZOOM → SETTLE COMBOS (container remains visible) ════════
 
    /** Zoom out → jelly squash-stretch settle */
    exitZoomSquash(onDone, target = 0.5) {
        return this.sequence([
            d => this.zoomTo(d, target, 1500),
            d => this.squashStretch(d, 0.12, 3, 700),
        ], onDone);
    }
 
    /** Zoom out → drop-bounce landing */
    exitZoomLand(onDone, target = 0.5) {
        return this.sequence([
            d => this.zoomTo(d, target, 1500),
            d => this.bounceLand(d, 25, 3, 700),
        ], onDone);
    }
 
    /** Zoom out → pendulum sway settle */
    exitZoomSway(onDone, target = 0.5) {
        return this.sequence([
            d => this.zoomTo(d, target, 1500),
            d => this.sway(d, 18, 2.5, 900),
        ], onDone);
    }
 
    /** Zoom out → blur then refocus */
    exitZoomBlur(onDone, target = 0.5) {
        return this.sequence([
            d => this.zoomTo(d, target, 1600),
            d => this.blurFocus(d, 8, 800),
        ], onDone);
    }
 
    /** Zoom out → bright flash */
    exitZoomFlash(onDone, target = 0.5) {
        return this.sequence([
            d => this.zoomTo(d, target, 1500),
            d => this.flash(d, 1.8, 450),
        ], onDone);
    }
 
    /** Zoom out → RGB glitch burst → clean */
    exitZoomGlitch(onDone, target = 0.5) {
        return this.sequence([
            d => this.zoomTo(d, target, 1500),
            d => this.rgbSplit(d, 0.012, 500),
        ], onDone);
    }
}
