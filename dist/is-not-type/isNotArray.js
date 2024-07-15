"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotArray = void 0;
const isArray_1 = require("../is-type/isArray");
function isNotArray(value) {
    return !(0, isArray_1.isArray)(value);
}
exports.isNotArray = isNotArray;
