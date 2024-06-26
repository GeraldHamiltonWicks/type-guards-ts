import { isNumber } from "../is-type";

export function isNotNumber<T>(value: T | number): value is T {
    return !isNumber(value);
}