/**
 * Checks whether the given value is an array of type `T`.
 *
 * @template T - The expected type of elements in the array.
 * @param value - The value to be checked.
 * @returns A boolean indicating whether the value is an array of type `T`.
 */
export declare function isArray<T>(value: unknown): value is Array<T>;
