"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotNull = void 0;
const is_type_1 = require("../is-type");
function isNotNull(value) {
    return !(0, is_type_1.isNull)(value);
}
exports.isNotNull = isNotNull;
