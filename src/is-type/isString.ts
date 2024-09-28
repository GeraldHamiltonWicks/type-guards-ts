/**
 * Checks whether the given value is a string.
 *
 * @param value - The value to be checked.
 * @returns A boolean indicating whether the value is a string.
 */
export function isString(value: unknown): value is string {
    return typeof value === "string";
}