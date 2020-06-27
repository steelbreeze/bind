"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.valueToProperty = void 0;
/**
 * Updates a property within observable state when the value of an HTMLInputElement or HTMLSelectElement changes.
 * @param elementId The id of the element to monitor changes of value.
 * @param observable The observable state to update upon a change.
 * @param propertyName The name of the property with the observable state to update; defaults to the elementId.
 * @param f An optional function to convert the element value prior to updating the observable state.
 */
function valueToProperty(elementId, observable, propertyName, f) {
    if (propertyName === void 0) { propertyName = elementId; }
    if (f === void 0) { f = function (value) { return value; }; }
    var element = document.getElementById(elementId);
    if (element) {
        if (element instanceof HTMLInputElement || element instanceof HTMLSelectElement) {
            // for input fields, add an event listner for value changes
            element.onchange = function () {
                var state = observable.getState();
                var value = f(element.value);
                // only update the observable state if it has changed
                if (value !== state[propertyName]) {
                    state[propertyName] = value;
                    observable.setState(state);
                }
            };
        }
        else {
            throw new Error(elementId + " is not an HTMLElement or HTMLSelectElement");
        }
    }
    else {
        throw new Error(elementId + " is not an element");
    }
}
exports.valueToProperty = valueToProperty;
