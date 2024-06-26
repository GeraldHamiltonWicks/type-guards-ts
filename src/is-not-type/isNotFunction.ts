import { isFunction } from "../is-type";

export function isNotFunction<T>(value: T | Function): value is T {
    return !isFunction(value);
}