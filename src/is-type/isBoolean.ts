/**
 * Checks whether the given value is of type `boolean`.
 *
 * @param value - The value to be checked.
 * @returns A boolean indicating whether the value is a `boolean`.
 */
export function isBoolean(value: unknown): value is boolean {
    return typeof value === "boolean";
}