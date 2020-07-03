"use strict";
exports.__esModule = true;
exports.value = exports.innerHTML = exports.textContent = exports.Observable = void 0;
/**
 * Implementation of the Observer pattern, allowing observers to attach to an object an be notified when its state changes. Additionally provides helper methods to bind to and from HTML elements.
 * @typeParam TState The type of the underlying state.
 */
var Observable = /** @class */ (function () {
    /**
     * Creates a new instance of the Observer class
     * @param state The initial underlying state.
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
        //        const index = this.observers.indexOf(observer);
        // remove the observer
        //      if (index !== -1) {
        //          this.observers.splice(index, 1);
        //     }
        this.observers = this.observers.filter(function (o) { return o !== observer; });
    };
    /**
     * Update the underlying state and notify observers.
     */
    Observable.prototype.setState = function (state) {
        // update the new state
        this.state = state;
        // notify observers
        this.notify();
    };
    /**
     * Update all observers with the current underlying state.
     * @private
     */
    Observable.prototype.notify = function () {
        // update the observers
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer(this.state);
        }
    };
    /**
     * Bind to state changes by updating the textContent of any HTMLElement.
     * @param element The HTMLElement to update on state changes.
     * @param f A function that takes the underlying state and returns the desired text.
     * @param target The type of binding to perform, one of: [textContent], [innerHTML], or [value].
     * @param notify Optional flag to control if the element should be updated immediately based on the curent underlying state.
     */
    Observable.prototype.to = function (element, target, f, notify) {
        if (notify === void 0) { notify = true; }
        return this.attach(target(element, f), notify);
    };
    /**
     * Receive state changes from value changes of an HTMLInputElement of HTMLSelectElement.
     * @param element
     * @param f A function to update the underlying state when the value changes.
     */
    Observable.prototype.from = function (element, f) {
        var _this = this;
        element.onchange = function () {
            // apply the new value to the observable state
            f(_this.state, element.value);
            // notify the observers
            _this.notify();
        };
    };
    return Observable;
}());
exports.Observable = Observable;
/**
 * Creates an [Observer] that updates an elements textContent upon a state change.
 * @param element The element to update.
 * @param f The function to convert from the observable state to the text content.
 * @returns Returns an [Observer].
 */
function textContent(element, f) {
    return function (state) { return element.textContent = f(state); };
}
exports.textContent = textContent;
/**
 * Creates an [Observer] that updates an elements innerHTML upon a state change.
 * @param element The element to update.
 * @param f The function to convert from the observable state to the HTML content.
 * @returns Returns an [Observer].
 */
function innerHTML(element, f) {
    return function (state) { return element.innerHTML = f(state); };
}
exports.innerHTML = innerHTML;
/**
 * Creates an [Observer] that updates an elements value upon a state change.
 * @param element The element to update.
 * @param f The function to convert from the observable state to the value.
 * @returns Returns an [Observer].
 */
function value(element, f) {
    return function (state) { return element.value = f(state); };
}
exports.value = value;
