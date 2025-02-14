"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = isArray;
/**
 * Checks whether the given value is an array of type `T`.
 *
 * @template T - The expected type of elements in the array.
 * @param value - The value to be checked.
 * @returns A boolean indicating whether the value is an array of type `T`.
 */
function isArray(value) {
    return Array.isArray(value);
}
