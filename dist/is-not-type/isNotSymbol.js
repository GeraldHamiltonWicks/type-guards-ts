"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotSymbol = void 0;
const is_type_1 = require("../is-type");
function isNotSymbol(value) {
    return !(0, is_type_1.isSymbol)(value);
}
exports.isNotSymbol = isNotSymbol;
