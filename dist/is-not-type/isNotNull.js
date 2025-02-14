"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotNull = isNotNull;
const is_type_1 = require("../is-type");
/**
 * Checks whether the given value is not null.
 *
 * @typeParam T - The type of the value being checked.
 * @param value - The value to be checked, which could be of type `T` or null.
 * @returns A boolean indicating whether the value is not null.
 */
function isNotNull(value) {
    return !(0, is_type_1.isNull)(value);
}
