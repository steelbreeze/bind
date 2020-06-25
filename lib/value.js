"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.value = void 0;
function value(element, observable, getString, notify) {
    if (notify === void 0) { notify = true; }
    // for input field, bind to the value attribute
    return observable.attach(function (state) {
        var value = getString(state);
        if (element.value !== value) { // TODO: change check to the origin of the upadate
            element.value = value;
        }
    }, notify);
}
exports.value = value;
