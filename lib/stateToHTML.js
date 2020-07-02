"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateToHTML = void 0;
function stateToHTML(element, observable, f, notify) {
    if (notify === void 0) { notify = true; }
    // any other HTMLElement, bind to the innerHTML attribute
    return observable.attach((function (state) { return element.innerHTML = f(state); }), notify);
}
exports.stateToHTML = stateToHTML;
