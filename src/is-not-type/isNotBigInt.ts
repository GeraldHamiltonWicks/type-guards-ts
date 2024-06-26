import { isBigInt } from "../is-type";

export function isNotBigInt<T>(value: T | bigint): value is T {
    return !isBigInt(value);
}