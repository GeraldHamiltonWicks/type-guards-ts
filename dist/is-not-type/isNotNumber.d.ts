/**
 * Checks whether the given value is not a number.
 *
 * @typeParam T - The type of the value being checked.
 * @param value - The value to be checked, which could be of type `T` or number.
 * @returns A boolean indicating whether the value is not a number.
 */
export declare function isNotNumber<T>(value: T | number): value is T;
