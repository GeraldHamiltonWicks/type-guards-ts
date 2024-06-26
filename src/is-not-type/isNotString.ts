import { isString } from "../is-type";

export function isNotString<T>(value: T | string): value is T {
    return !isString(value);
}