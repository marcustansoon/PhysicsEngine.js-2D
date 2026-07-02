export default class EventEmitter {
	constructor() {
		// Map avoids prototype-key edge cases ("__proto__", "constructor", etc.)
		this.listeners = new Map();
	}

	/**
	 * Subscribe to an event.
	 * Returns an unsubscribe function for convenience.
	 */
	on(event, fn, name = null) {
		if (!this.listeners.has(event)) {
			this.listeners.set(event, []);
		}

		this.listeners.get(event).push({ fn, name });

		return () => this.off({ event, fn });
	}

	/**
	 * Subscribe to an event, but only fire once.
	 * Returns an unsubscribe function (in case it never fires).
	 */
	once(event, fn, name = null) {
		const wrapper = (...args) => {
			this.off({ event, fn: wrapper });
			fn(...args);
		};

		return this.on(event, wrapper, name);
	}

	/**
	 * Emit an event with any number of arguments.
	 * - Iterates over a snapshot, so listeners added/removed mid-emit
	 *   don't affect this emit cycle.
	 * - A throwing listener won't prevent the others from running.
	 */
	emit(event, ...args) {
		const listeners = this.listeners.get(event);
		if (!listeners) return;

		for (const { fn } of [...listeners]) {
			try {
				fn(...args);
			} catch (err) {
				console.error(`EventEmitter: listener for "${event}" threw`, err);
			}
		}
	}

	/**
	 * Remove listeners.
	 *
	 * - off()                          → remove everything
	 * - off({ event })                 → remove all listeners for that event
	 * - off({ event, fn })             → remove listeners for that event with that fn
	 * - off({ name })                  → remove listeners with that name, across all events
	 * - off({ event, name, fn })      → AND semantics: all provided criteria must match
	 */
	off({ event, name, fn } = {}) {
		// Remove everything
		if (!event && !name && !fn) {
			this.clear();
			return;
		}

		// Event specified alone → drop the whole bucket
		if (event && !name && !fn) {
			this.listeners.delete(event);
			return;
		}

		const events = event ? [event] : [...this.listeners.keys()];

		for (const evt of events) {
			const remaining = (this.listeners.get(evt) || []).filter(listener => {
				// AND semantics: every provided criterion must match to remove
				if (name && listener.name !== name) return true;
				if (fn && listener.fn !== fn) return true;
				return false;
			});

			if (remaining.length === 0) {
				this.listeners.delete(evt);
			} else {
				this.listeners.set(evt, remaining);
			}
		}
	}

	clear() {
		this.listeners.clear();
	}
}