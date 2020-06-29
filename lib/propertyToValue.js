"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyToValue = void 0;
/**
 * Binds an HTMLInputElement or HTMLSelectElement's value to changes in an Observable object.
 * @typeParam TState The type of the underlying state.
 * @param elementId The id of the .
 * @param observable The observable state to update upon a change.
 * @param propertyName The name of the property with the observable state to update; defaults to the elementId.
 * @param f An optional function to convert the element value prior to updating the observable state.
 * @param notify An optional parameter to notify the control immediately; defaults to true.
 */
function propertyToValue(elementId, observable, propertyName, f, notify) {
    if (propertyName === void 0) { propertyName = elementId; }
    if (f === void 0) { f = function (value) { return value; }; }
    if (notify === void 0) { notify = true; }
    var element = document.getElementById(elementId);
    if (element) {
        if (element instanceof HTMLInputElement || element instanceof HTMLSelectElement) {
            // for input field, bind to the value attribute
            return observable.attach(function (state) {
                var value = f(state[propertyName]);
                if (element.value !== value) {
                    element.value = value;
                }
            }, notify);
        }
        else {
            throw new Error(elementId + " is not an HTMLElement or HTMLSelectElement");
        }
    }
    else {
        throw new Error(elementId + " is not an element");
    }
}
exports.propertyToValue = propertyToValue;
