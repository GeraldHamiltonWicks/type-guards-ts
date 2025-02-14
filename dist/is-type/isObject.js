"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = isObject;
/**
 * Checks whether the given value is an object.
 *
 * @param value - The value to be checked.
 * @returns A boolean indicating whether the value is an object.
 */
function isObject(value) {
    return typeof value === "object";
}
