"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = isString;
/**
 * Checks whether the given value is a string.
 *
 * @param value - The value to be checked.
 * @returns A boolean indicating whether the value is a string.
 */
function isString(value) {
    return typeof value === "string";
}
