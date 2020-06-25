"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.from = void 0;
function from(element, observable, updateState) {
    // for input fields, add an event listner for value changes
    element.onchange = function () {
        var state = updateState(element.value, observable.getState());
        if (state !== observable.getState()) {
            observable.setState(state);
        }
    };
}
exports.from = from;
