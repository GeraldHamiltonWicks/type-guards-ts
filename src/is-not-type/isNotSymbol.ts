import { isSymbol } from "../is-type";

/**
 * Checks whether the given value is not a symbol.
 *
 * @typeParam T - The type of the value being checked.
 * @param value - The value to be checked, which could be of type `T` or a symbol.
 * @returns A boolean indicating whether the value is not a symbol.
 */
export function isNotSymbol<T>(value: T | symbol): value is T {
    return !isSymbol(value);
}