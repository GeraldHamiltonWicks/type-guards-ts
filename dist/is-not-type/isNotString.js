"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotString = void 0;
const is_type_1 = require("../is-type");
function isNotString(value) {
    return !(0, is_type_1.isString)(value);
}
exports.isNotString = isNotString;
