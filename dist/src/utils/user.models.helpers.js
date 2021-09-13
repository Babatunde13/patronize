"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserByEmail = exports.findUserById = exports.createUser = void 0;
var password_1 = require("./password");
var user_1 = __importDefault(require("../models/user"));
var createUser = function (data) {
    data.password = (0, password_1.hashPassword)(data.password);
    var user = user_1.default.create({
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName
    });
    return user;
};
exports.createUser = createUser;
var findUserById = function (id) {
    var user = user_1.default.findOne({ where: { id: id }, rejectOnEmpty: false });
    return user;
};
exports.findUserById = findUserById;
var findUserByEmail = function (email) {
    var user = user_1.default.findOne({ where: { email: email }, rejectOnEmpty: false });
    return user;
};
exports.findUserByEmail = findUserByEmail;
//# sourceMappingURL=user.models.helpers.js.map