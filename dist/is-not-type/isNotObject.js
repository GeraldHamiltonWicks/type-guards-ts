"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotObject = isNotObject;
const is_type_1 = require("../is-type");
/**
 * Checks whether the given value is not an object.
 *
 * @typeParam T - The type of the value being checked.
 * @param value - The value to be checked, which could be of type `T` or an object.
 * @returns A boolean indicating whether the value is not an object.
 */
function isNotObject(value) {
    return !(0, is_type_1.isObject)(value);
}
