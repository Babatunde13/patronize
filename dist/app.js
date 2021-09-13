"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger_1 = require("./src/utils/logger");
var routes_1 = __importDefault(require("./src/routes"));
var envs_1 = __importDefault(require("./src/utils/envs"));
var connect_1 = __importDefault(require("./src/models/connect"));
var app = (0, express_1.default)();
var PORT = envs_1.default.envs.PORT || 5000;
// add app configurations here
connect_1.default.authenticate()
    .then(function () {
    console.log('Connection has been established successfully.');
}).catch(function (error) {
    console.error('Unable to connect to the database:', error);
});
// add middlewares here
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// add routes middlewares here
app.use('/api/v1/', routes_1.default);
app.listen(PORT, function () {
    (0, logger_1.infoLogger)("App running on port " + PORT);
});
//# sourceMappingURL=app.js.map