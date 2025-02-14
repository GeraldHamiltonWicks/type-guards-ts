"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotUndefined = isNotUndefined;
const is_type_1 = require("../is-type");
/**
 * Checks whether the given value is not undefined.
 *
 * @typeParam T - The type of the value being checked.
 * @param value - The value to be checked, which could be of type `T` or undefined.
 * @returns A boolean indicating whether the value is not undefined.
 */
function isNotUndefined(value) {
    return !(0, is_type_1.isUndefined)(value);
}
