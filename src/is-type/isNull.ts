/**
 * Checks whether the given value is `null`.
 *
 * @param value - The value to be checked.
 * @returns A boolean indicating whether the value is `null`.
 */
export function isNull(value: unknown): value is null {
    return value === null;
}