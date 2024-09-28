import { isFunction } from "../is-type";

/**
 * Checks whether the given value is not a function.
 *
 * @typeParam T - The type of the value being checked.
 * @param value - The value to be checked, which could be of type `T` or a function.
 * @returns A boolean indicating whether the value is not a function.
 */
export function isNotFunction<T>(value: T | Function): value is T {
    return !isFunction(value);
}