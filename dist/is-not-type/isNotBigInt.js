"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotBigInt = void 0;
const is_type_1 = require("../is-type");
function isNotBigInt(value) {
    return !(0, is_type_1.isBigInt)(value);
}
exports.isNotBigInt = isNotBigInt;
