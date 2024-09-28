import { isArray } from "../is-type/isArray";

/**
 * Checks whether the given value is not an array.
 *
 * @typeParam T - The type of the value being checked.
 * @param value - The value to be checked, which could be of type `T` or an array.
 * @returns A boolean indicating whether the value is not an array.
 */
export function isNotArray<T>(value: T | Array<unknown>): value is T {
    return !isArray(value);
}