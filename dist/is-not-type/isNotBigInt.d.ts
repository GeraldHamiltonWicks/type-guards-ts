/**
 * Checks whether the given value is not a bigint.
 *
 * @typeParam T - The type of the value being checked.
 * @param value - The value to be checked, which could be of type `T` or a bigint.
 * @returns A boolean indicating whether the value is not a bigint.
 */
export declare function isNotBigInt<T>(value: T | bigint): value is T;
