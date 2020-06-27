"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyToValue = void 0;
function propertyToValue(elementId, observable, propertyName, f) {
    if (propertyName === void 0) { propertyName = elementId; }
    if (f === void 0) { f = function (value) { return value; }; }
    var element = document.getElementById(elementId);
    if (element) {
        if (element instanceof HTMLInputElement || element instanceof HTMLSelectElement) {
            // for input field, bind to the value attribute
            return observable.attach(function (state) {
                var value = f(state[propertyName]);
                if (element.value !== value) {
                    element.value = value;
                }
            });
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
