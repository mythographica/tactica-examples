"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lookupTyped = lookupTyped;
exports.collectionLookup = collectionLookup;
const mnemonica_1 = require("mnemonica");
function lookupTyped(path) {
    return (0, mnemonica_1.lookup)(path);
}
function collectionLookup(collection, path) {
    return collection.lookup(path);
}
//# sourceMappingURL=lookup.js.map