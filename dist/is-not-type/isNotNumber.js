"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotNumber = void 0;
const is_type_1 = require("../is-type");
function isNotNumber(value) {
    return !(0, is_type_1.isNumber)(value);
}
exports.isNotNumber = isNotNumber;
