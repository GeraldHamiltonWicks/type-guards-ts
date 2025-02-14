/**
 * Determines if the provided value is not a Date object.
 *
 * This type guard checks whether the given value is not a Date by leveraging the `isDate` helper function.
 * If the value is not a Date, the function returns true and narrows the type to `T`, effectively excluding Date.
 *
 * @param value - The value to test, which can be of a generic type `T` or a number.
 * @returns True if the value is not a Date object, otherwise false.
 */
export declare function isNotDate<T>(value: T | number): value is T;
