"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var envs_1 = __importDefault(require("../utils/envs"));
console.log(envs_1.default);
var sequelize = new sequelize_1.Sequelize(envs_1.default.envs.databaseURL || 'sqlite::memory:');
exports.default = sequelize;
//# sourceMappingURL=connect.js.map