/**
 * Checks whether the given value is not a string.
 *
 * @typeParam T - The type of the value being checked.
 * @param value - The value to be checked, which could be of type `T` or a string.
 * @returns A boolean indicating whether the value is not a string.
 */
export declare function isNotString<T>(value: T | string): value is T;
