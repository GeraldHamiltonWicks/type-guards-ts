import { isNull } from "../is-type";

/**
 * Checks whether the given value is not null.
 *
 * @typeParam T - The type of the value being checked.
 * @param value - The value to be checked, which could be of type `T` or null.
 * @returns A boolean indicating whether the value is not null.
 */
export function isNotNull<T>(value: T | null): value is T {
    return !isNull(value)
}