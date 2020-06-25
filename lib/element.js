"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.element = void 0;
function element(name, content, attributes) {
    if (content === void 0) { content = ""; }
    if (attributes === void 0) { attributes = {}; }
    return "<" + name + " " + Object.keys(attributes).map(function (key) { return key + "='" + attributes[key] + "'"; }).join(" ") + ">" + content + "</" + name + ">";
}
exports.element = element;
