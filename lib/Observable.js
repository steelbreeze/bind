"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Observable = void 0;
/**
 * Implementation of the Observer pattern, allowing observers to attach to an object an be notified when its state changes.
 * @typeParam TState The type of the underlying state.
 */
var Observable = /** @class */ (function () {
    /**
     * Creates a new instance of the Observer class
     * @param state The initial underlying state.
     */
    function Observable(state) {
        this._observers = [];
        this._state = state;
    }
    /**
     * Receive updates when the state changes.
     * @param observer A function to call when the state changes.
     * @param notify Optional flag to control if the observer should be notified upon attaching to receive the latest value.
     * @returns Returns the update function (so it can be later detached if required).
     */
    Observable.prototype.attach = function (observer, notify) {
        if (notify === void 0) { notify = true; }
        if (observer) {
            // add the new observer
            this._observers.push(observer);
            // call the observer if required (initial value on subscription)
            if (notify) {
                observer(this.state);
            }
            return observer;
        }
        else {
            throw new Error("Observer cannot be undefined");
        }
    };
    /**
     * Stop receiving updates when the state changes.
     * @param observer A previously attached function.
     */
    Observable.prototype.detach = function (observer) {
        // find the observer
        var index = this._observers.indexOf(observer);
        // remove the observer
        if (index !== -1) {
            this._observers.splice(index, 1);
        }
    };
    Object.defineProperty(Observable.prototype, "state", {
        get: function () {
            return this._state;
        },
        /**
         * The underlying state being observed.
         */
        set: function (value) {
            // update the new state
            this._state = value;
            // update the observers
            for (var _i = 0, _a = this._observers; _i < _a.length; _i++) {
                var observer = _a[_i];
                observer(this.state);
            }
        },
        enumerable: false,
        configurable: true
    });
    return Observable;
}());
exports.Observable = Observable;
