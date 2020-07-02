"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyToValue = void 0;
/**
 * Binds an HTMLInputElement or HTMLSelectElement's value to changes in an Observable object.
 * @typeParam TState The type of the underlying state.
 * @param element The element whose value to bind a property of the observable state to.
 * @param observable The observable state to update upon a change.
 * @param propertyName The name of the property with the observable state to update; defaults to the element's id.
 * @param f An optional function to convert the element value prior to updating the observable state.
 * @param notify An optional parameter to notify the control immediately; defaults to true.
 */
function propertyToValue(element, observable, propertyName, f, notify) {
    if (propertyName === void 0) { propertyName = element.id; }
    if (f === void 0) { f = function (value) { return value; }; }
    if (notify === void 0) { notify = true; }
    // for input field, bind to the value attribute
    return observable.attach(function (state) {
        var value = f(state ? state[propertyName] : undefined);
        if (element.value !== value) {
            element.value = value;
        }
    }, notify);
}
exports.propertyToValue = propertyToValue;
