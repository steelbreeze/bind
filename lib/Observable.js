"use strict";
exports.__esModule = true;
exports.Observable = void 0;
/**
 * Implementation of the Observer pattern, allowing observers to attach to an object an be notified when its state changes. Additionally provides helper methods to bind to and from HTML elements.
 * @typeParam TState The type of the underlying state.
 */
var Observable = /** @class */ (function () {
    /**
     * Creates a new instance of the Observer class
     * @param state The underlying state.
     */
    function Observable(state) {
        this.state = state;
        /**
         * The callbacks to call on a state change.
         * @private
         */
        this.observers = [];
    }
    /**
     * Subscribe for a callback when the underlying state changes.
     * @param observer A function to call when the state changes; takes the underlying state as a parameter.
     * @param notify Optional flag to control if the observer should be notified immediately with the curent value.
     */
    Observable.prototype.attach = function (observer, notify) {
        if (notify === void 0) { notify = true; }
        // add the new observer
        this.observers.push(observer);
        // call the observer if required (initial value on subscription)
        if (notify) {
            observer(this.state);
        }
        return observer;
    };
    /**
     * Unsubscribe to stop receiving updates when the state changes.
     * @param observer A previously subscribed observer.
     */
    Observable.prototype.detach = function (observer) {
        // find the observer
        var index = this.observers.indexOf(observer);
        // remove the observer
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    };
    /**
     * Create a callback function that will update the observable state in response to an event
     * @param f A callback to use to update the state.
     */
    Observable.prototype.update = function (f) {
        // update the state
        f(this.state);
        this.notify();
    };
    Observable.prototype.notify = function () {
        // update the observers
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer(this.state);
        }
    };
    Observable.prototype.replace = function (state) {
        this.state = state;
        this.notify();
    };
    return Observable;
}());
exports.Observable = Observable;
