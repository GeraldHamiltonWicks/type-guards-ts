import { isArray } from "../is-type/isArray";

export function isNotArray<T>(value: T | Array<unknown>): value is T {
    return !isArray(value);
}