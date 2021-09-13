"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.warningLogger = exports.errorLogger = exports.infoLogger = void 0;
var chalk_1 = __importDefault(require("chalk"));
var log = console.log;
var infoLogger = function (data) {
    log(chalk_1.default.bold.blue(data));
};
exports.infoLogger = infoLogger;
var errorLogger = function (data) {
    log(chalk_1.default.bold.red(data));
};
exports.errorLogger = errorLogger;
var warningLogger = function (data) {
    log(chalk_1.default.bold.yellow(data));
};
exports.warningLogger = warningLogger;
//# sourceMappingURL=logger.js.map