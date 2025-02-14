"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = isNumber;
/**
 * Checks whether the given value is a number.
 *
 * @param value - The value to be checked.
 * @returns A boolean indicating whether the value is a number.
 */
function isNumber(value) {
    return typeof value === "number";
}
