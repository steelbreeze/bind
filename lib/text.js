"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.text = void 0;
function text(element, observable, getString, notify) {
    if (notify === void 0) { notify = true; }
    // any other HTMLElement, bind to the innerHTML attribute
    return observable.attach(function (state) { return element.innerText = getString(state); }, notify);
}
exports.text = text;
