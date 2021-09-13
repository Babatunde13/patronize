"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users_1 = require("../controllers/users");
var auth_1 = require("../middlewares/auth");
var routes = (0, express_1.Router)();
routes.get('/', auth_1.authUser, users_1.getAuthenticatedUser);
exports.default = routes;
//# sourceMappingURL=users.js.map