"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFunction = isFunction;
/**
 * Checks whether the given value is of type `Function`.
 *
 * @param value - The value to be checked.
 * @returns A boolean indicating whether the value is a `Function`.
 */
function isFunction(value) {
    return typeof value === "function";
}
