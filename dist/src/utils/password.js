"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPassword = exports.hashPassword = void 0;
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var hashPassword = function (password) {
    return bcryptjs_1.default.hash(password);
};
exports.hashPassword = hashPassword;
var verifyPassword = function (password) {
    return bcryptjs_1.default.compare(password);
};
exports.verifyPassword = verifyPassword;
//# sourceMappingURL=password.js.map