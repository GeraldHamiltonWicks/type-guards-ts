"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotFunction = isNotFunction;
const is_type_1 = require("../is-type");
/**
 * Checks whether the given value is not a function.
 *
 * @typeParam T - The type of the value being checked.
 * @param value - The value to be checked, which could be of type `T` or a function.
 * @returns A boolean indicating whether the value is not a function.
 */
function isNotFunction(value) {
    return !(0, is_type_1.isFunction)(value);
}
