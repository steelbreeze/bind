"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.html = void 0;
// TODO: replace element func with clasess and use those to represent the HTML structure
function html(element, observable, getString, notify) {
    if (notify === void 0) { notify = true; }
    // any other HTMLElement, bind to the innerHTML attribute
    return observable.attach(function (state) { return element.innerHTML = getString(state).join(""); }, notify);
}
exports.html = html;
