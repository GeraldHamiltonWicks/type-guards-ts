"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotArray = isNotArray;
const isArray_1 = require("../is-type/isArray");
/**
 * Checks whether the given value is not an array.
 *
 * @typeParam T - The type of the value being checked.
 * @param value - The value to be checked, which could be of type `T` or an array.
 * @returns A boolean indicating whether the value is not an array.
 */
function isNotArray(value) {
    return !(0, isArray_1.isArray)(value);
}
