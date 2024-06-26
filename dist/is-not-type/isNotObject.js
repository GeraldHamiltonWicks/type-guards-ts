"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotObject = void 0;
const is_type_1 = require("../is-type");
function isNotObject(value) {
    return !(0, is_type_1.isObject)(value);
}
exports.isNotObject = isNotObject;
