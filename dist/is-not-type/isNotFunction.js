"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotFunction = void 0;
const is_type_1 = require("../is-type");
function isNotFunction(value) {
    return !(0, is_type_1.isFunction)(value);
}
exports.isNotFunction = isNotFunction;
