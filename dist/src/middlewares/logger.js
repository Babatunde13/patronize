"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (req, res, next) {
    console.log({
        type: 'API',
        path: req.path,
        method: req.method,
        date: new Date()
    });
    next();
});
//# sourceMappingURL=logger.js.map