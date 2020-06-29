"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notElement = void 0;
function notElement(elementId) {
    return new Error(elementId + " is not an HTML element");
}
exports.notElement = notElement;
