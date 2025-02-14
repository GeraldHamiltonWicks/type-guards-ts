"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBigInt = isBigInt;
/**
 * Checks whether the given value is of type `bigint`.
 *
 * @param value - The value to be checked.
 * @returns A boolean indicating whether the value is a `bigint`.
 */
function isBigInt(value) {
    return typeof value === "bigint";
}
