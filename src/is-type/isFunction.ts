/**
 * Checks whether the given value is of type `Function`.
 *
 * @param value - The value to be checked.
 * @returns A boolean indicating whether the value is a `Function`.
 */
export function isFunction(value: unknown): value is Function {
    return typeof value === "function"
}