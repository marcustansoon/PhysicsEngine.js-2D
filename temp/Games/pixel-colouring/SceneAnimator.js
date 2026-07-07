// ─────────────────────────────────────────────────────────────
// SceneAnimator — self-contained exit/transition effects (Pixi v8)
//
//   import { SceneAnimator } from './SceneAnimator.js';
//
//   this.fx = new SceneAnimator(this.app, this.objContainer);
//   this.fx.exitPunch(() => console.log('next scene'));
//
// It drives itself via app.ticker — no update() wiring needed.
// Call fx.destroy() when tearing the scene down.
// ─────────────────────────────────────────────────────────────
const Ease = {
    linear:     t => t,
    outCubic:   t => 1 - Math.pow(1 - t, 3),
    inCubic:    t => t * t * t,
    inOutCubic: t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
    inBack:     t => 2.70158 * t * t * t - 1.70158 * t * t,
};

export class SceneAnimator {
    /**
     * @param {Application} app - the Pixi Application
     * @param {Container} target - container the effects act on
     * @param {object} [opts]
     * @param {boolean} [opts.autoTick=true] - self-drive via app.ticker.
     *        Set false to drive manually: call fx.update(deltaMS) yourself.
     */
    constructor(app, target, { autoTick = false } = {}) {
        this.app = app;
        this.target = target;
        this.anim = null;

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
        for (const f of ['waveFilter', 'pixelFilter', 'dissolveFilter']) {
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
}

export { Ease };
