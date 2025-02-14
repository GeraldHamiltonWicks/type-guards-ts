"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDate = isDate;
/**
 * Checks whether the provided value is a Date object.
 *
 * This function verifies if the given value is a Date by first checking whether
 * it is an instance of Date. It also uses Object.prototype.toString for scenarios
 * where the Date object might come from a different execution context.
 *
 * @param value - The value to test.
 * @returns True if the value is a Date object, otherwise false.
 */
function isDate(value) {
    return (value instanceof Date ||
        (typeof value === "object" &&
            Object.prototype.toString.call(value) === "[object Date]"));
}
