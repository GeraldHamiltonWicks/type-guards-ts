"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotDate = isNotDate;
const is_type_1 = require("../is-type");
/**
 * Determines if the provided value is not a Date object.
 *
 * This type guard checks whether the given value is not a Date by leveraging the `isDate` helper function.
 * If the value is not a Date, the function returns true and narrows the type to `T`, effectively excluding Date.
 *
 * @param value - The value to test, which can be of a generic type `T` or a number.
 * @returns True if the value is not a Date object, otherwise false.
 */
function isNotDate(value) {
    return !(0, is_type_1.isDate)(value);
}
