"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotUndefined = void 0;
const is_type_1 = require("../is-type");
function isNotUndefined(value) {
    return !(0, is_type_1.isUndefined)(value);
}
exports.isNotUndefined = isNotUndefined;
