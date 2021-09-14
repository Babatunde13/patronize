"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getAuthenticatedUser = void 0;
var user_models_helpers_1 = require("./../utils/user.models.helpers");
var getAuthenticatedUser = function (req, res) {
    console.log(req);
    var response = {
        data: { user: { id: '' } },
        message: 'Successfully fetched user',
        status: 'ok',
        errors: ''
    };
    res.json(response);
};
exports.getAuthenticatedUser = getAuthenticatedUser;
var createUser = function (req, res) {
    console.log(req, res);
    var user;
    (0, user_models_helpers_1.createUser)({
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }).then(function (res) { user = res.toJSON(); });
    var response = {
        data: user,
        message: 'Successfully fetched user',
        status: 'ok',
        errors: ''
    };
    res.status(201).json(response);
};
exports.createUser = createUser;
//# sourceMappingURL=users.js.map