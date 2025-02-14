/**
 * Checks whether the given value is not undefined.
 *
 * @typeParam T - The type of the value being checked.
 * @param value - The value to be checked, which could be of type `T` or undefined.
 * @returns A boolean indicating whether the value is not undefined.
 */
export declare function isNotUndefined<T>(value: T | undefined): value is T;
