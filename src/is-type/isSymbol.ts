/**
 * Checks whether the given value is a symbol.
 *
 * @param value - The value to be checked.
 * @returns A boolean indicating whether the value is a symbol.
 */
export function isSymbol(value: unknown): value is symbol {
    return typeof value === "symbol";
}