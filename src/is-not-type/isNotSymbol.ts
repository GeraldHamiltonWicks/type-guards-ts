import { isSymbol } from "../is-type";

export function isNotSymbol<T>(value: T | symbol): value is T {
    return !isSymbol(value);
}