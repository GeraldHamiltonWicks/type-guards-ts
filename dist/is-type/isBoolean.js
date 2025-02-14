"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBoolean = isBoolean;
/**
 * Checks whether the given value is of type `boolean`.
 *
 * @param value - The value to be checked.
 * @returns A boolean indicating whether the value is a `boolean`.
 */
function isBoolean(value) {
    return typeof value === "boolean";
}
