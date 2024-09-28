/**
 * Checks whether the given value is an object.
 *
 * @param value - The value to be checked.
 * @returns A boolean indicating whether the value is an object.
 */
export function isObject(value: unknown): value is object {
    return typeof value === "object";
}