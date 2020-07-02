"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.valueToProperty = void 0;
/**
 * Binds an Observable object to value changes within an HTMLInputElement or HTMLSelectElement.
 * @typeParam TState - The type of the underlying state.
 * @param element The element whose value to update a property of the observable state from.
 * @param observable The observable state to update upon a change.
 * @param propertyName The name of the property with the observable state to update; defaults to the element's id.
 * @param f - An optional function to convert the element value prior to updating the observable state.
 */
function valueToProperty(element, observable, propertyName, f) {
    if (propertyName === void 0) { propertyName = element.id; }
    if (f === void 0) { f = function (value) { return value; }; }
    // for input fields, add an event listner for value changes
    element.onchange = function () {
        var state = observable.state || {};
        var value = f(element.value);
        // only update the observable state if it has changed
        if (value !== state[propertyName]) {
            state[propertyName] = value;
            observable.state = state;
        }
    };
}
exports.valueToProperty = valueToProperty;
