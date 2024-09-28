/**
 * Checks whether the given value is `undefined`.
 *
 * @param value - The value to be checked.
 * @returns A boolean indicating whether the value is `undefined`.
 */
export function isUndefined(value: unknown): value is undefined {
    return value === undefined;
}