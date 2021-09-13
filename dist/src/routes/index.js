"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var logger_1 = __importDefault(require("../middlewares/logger"));
var transactions_1 = __importDefault(require("./transactions"));
var users_1 = __importDefault(require("./users"));
var routes = (0, express_1.Router)();
routes.use(logger_1.default);
routes.use('/transactions', transactions_1.default);
routes.use('/users/', users_1.default);
routes.use('*', function (req, res) {
    res.status(404).json({
        data: null,
        errors: 'The path you made request to does not exist for the used method',
        status: 'bad',
        message: 'not found'
    });
});
exports.default = routes;
//# sourceMappingURL=index.js.map