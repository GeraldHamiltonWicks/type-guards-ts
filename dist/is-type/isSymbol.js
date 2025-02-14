"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSymbol = isSymbol;
/**
 * Checks whether the given value is a symbol.
 *
 * @param value - The value to be checked.
 * @returns A boolean indicating whether the value is a symbol.
 */
function isSymbol(value) {
    return typeof value === "symbol";
}
