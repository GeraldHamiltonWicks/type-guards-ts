import { isUndefined } from "../is-type";

export function isNotUndefined<T>(value: T | undefined): value is T {
    return !isUndefined(value);
}