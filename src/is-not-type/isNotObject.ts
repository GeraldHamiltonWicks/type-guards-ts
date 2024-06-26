import { isObject } from "../is-type";

export function isNotObject<T>(value: T | object): value is T {
    return !isObject(value);
}