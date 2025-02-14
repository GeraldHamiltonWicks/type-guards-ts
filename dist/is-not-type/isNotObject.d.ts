/**
 * Checks whether the given value is not an object.
 *
 * @typeParam T - The type of the value being checked.
 * @param value - The value to be checked, which could be of type `T` or an object.
 * @returns A boolean indicating whether the value is not an object.
 */
export declare function isNotObject<T>(value: T | object): value is T;
