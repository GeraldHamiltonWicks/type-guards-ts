"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotBigInt = isNotBigInt;
const is_type_1 = require("../is-type");
/**
 * Checks whether the given value is not a bigint.
 *
 * @typeParam T - The type of the value being checked.
 * @param value - The value to be checked, which could be of type `T` or a bigint.
 * @returns A boolean indicating whether the value is not a bigint.
 */
function isNotBigInt(value) {
    return !(0, is_type_1.isBigInt)(value);
}
