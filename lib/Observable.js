"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Observable = void 0;
/**
 * Implementation of the Observer pattern, allowing observers to attach to an object an be notified when its state changes.
 * @param TState The type of the underlying state.
 */
var Observable = /** @class */ (function () {
    /**
     * Creates a new instance of the Observer class
     * @param state The initial state.
     */
    function Observable(state) {
        this.state = state;
        this.observers = [];
    }
    /**
     * Receive updates when the state changes.
     * @param update A function to call when the state changes.
     * @param notify Optional flag to control if the observer should be notified upon attaching to receive the latest value.
     * @returns Returns the update function (so it can be later detached if required).
     */
    Observable.prototype.attach = function (update, notify) {
        if (notify === void 0) { notify = true; }
        this.observers.push(update);
        if (notify) {
            update(this.state);
        }
        return update;
    };
    /**
     * Stop receiving updates when the state changes.
     * @param update A previously attached function.
     */
    Observable.prototype.detach = function (update) {
        var index = this.observers.indexOf(update);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    };
    /**
     * Updates all observers upon state change.
     */
    Observable.prototype.notify = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer(this.state);
        }
    };
    /**
     * Updates the state of the observable object, calling all observers to be notified.
     * @param state The new state for the observable object.
     */
    Observable.prototype.setState = function (state, notify) {
        if (notify === void 0) { notify = true; }
        this.state = state;
        if (notify) {
            this.notify();
        }
    };
    /**
     * Gets the current state of the observaable object.
     * @returns Returns the current state of the observable object
     */
    Observable.prototype.getState = function () {
        return this.state;
    };
    return Observable;
}());
exports.Observable = Observable;
