"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
function update(changes, existing) {
    // create a new record
    var updated = {};
    // copy the attribute structure from the existing
    Object.keys(existing).forEach(function (attribute) {
        // copy the changed attributes if present, otherwise use the existing
        updated[attribute] = changes[attribute] || existing[attribute];
    });
    return updated;
}
exports.update = update;
