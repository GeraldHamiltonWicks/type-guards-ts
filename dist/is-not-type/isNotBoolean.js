"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotBoolean = void 0;
const is_type_1 = require("../is-type");
function isNotBoolean(value) {
    return !(0, is_type_1.isBoolean)(value);
}
exports.isNotBoolean = isNotBoolean;
