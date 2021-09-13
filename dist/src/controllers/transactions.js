"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withdraw = exports.addBeneficiaries = exports.sendMoney = exports.fundAccount = exports.getUserTransactions = void 0;
var getUserTransactions = function (req, res) {
    console.log(req);
    var response = {
        data: { user: { id: '' } },
        message: 'Successfully fetched users transactions',
        status: 'ok',
        errors: ''
    };
    res.json(response);
};
exports.getUserTransactions = getUserTransactions;
var fundAccount = function (req, res) {
    console.log(req);
    var response = {
        data: { user: { id: '' } },
        message: 'Successfully funded account',
        status: 'ok',
        errors: ''
    };
    res.json(response);
};
exports.fundAccount = fundAccount;
var sendMoney = function (req, res) {
    console.log(req);
    var response = {
        data: { user: { id: '' } },
        message: 'Successfully sent money',
        status: 'ok',
        errors: ''
    };
    res.json(response);
};
exports.sendMoney = sendMoney;
var addBeneficiaries = function (req, res) {
    console.log(req);
    var response = {
        data: { user: { id: '' } },
        message: 'Successfully added beneficiaries',
        status: 'ok',
        errors: ''
    };
    res.json(response);
};
exports.addBeneficiaries = addBeneficiaries;
var withdraw = function (req, res) {
    console.log(req);
    var response = {
        data: { user: { id: '' } },
        message: 'Successfully withdrew money',
        status: 'ok',
        errors: ''
    };
    res.json(response);
};
exports.withdraw = withdraw;
//# sourceMappingURL=transactions.js.map