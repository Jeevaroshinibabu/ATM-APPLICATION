const Account = require("../models/accountModel");

const getBalance = async (accountNumber) => {
    return await Account.findOne({ accountNumber });
};
module.exports = {
    getBalance
};