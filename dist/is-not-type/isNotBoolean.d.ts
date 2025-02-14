/**
 * Checks whether the given value is not a boolean.
 *
 * @typeParam T - The type of the value being checked.
 * @param value - The value to be checked, which could be of type `T` or a boolean.
 * @returns A boolean indicating whether the value is not a boolean.
 */
export declare function isNotBoolean<T>(value: T | number): value is T;
