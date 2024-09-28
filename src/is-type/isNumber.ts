/**
 * Checks whether the given value is a number.
 *
 * @param value - The value to be checked.
 * @returns A boolean indicating whether the value is a number.
 */
export function isNumber(value: unknown): value is number {
    return typeof value === "number";
}