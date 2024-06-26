import { isNull } from "../is-type";

export function isNotNull<T>(value: T | null): value is T {
    return !isNull(value)
}