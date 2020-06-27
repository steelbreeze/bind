"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateToHTML = void 0;
function stateToHTML(elementId, observable, f) {
    var element = document.getElementById(elementId);
    if (element) {
        // any other HTMLElement, bind to the innerHTML attribute
        return observable.attach((function (state) { return element.innerHTML = f(state); }));
    }
    else {
        throw new Error(elementId + " is not an element");
    }
}
exports.stateToHTML = stateToHTML;
