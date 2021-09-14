"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var envs_1 = __importDefault(require("./envs"));
describe('envs', function () {
    it('should contain "port"', function () {
        var envs = envs_1.default.envs;
        (0, chai_1.expect)(envs).to.have.property('PORT');
    });
    it('should contain "databaseURL"', function () {
        var envs = envs_1.default.envs;
        (0, chai_1.expect)(envs).to.have.property('databaseURL');
    });
});
//# sourceMappingURL=envs.spec.js.map