import { isBoolean } from "../is-type";

export function isNotBoolean<T>(value: T | number): value is T {
    return !isBoolean(value);
}