"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var transactions_1 = require("../controllers/transactions");
var auth_1 = require("../middlewares/auth");
var routes = (0, express_1.Router)();
routes.get('/', auth_1.authUser, transactions_1.getUserTransactions);
exports.default = routes;
//# sourceMappingURL=transactions.js.map