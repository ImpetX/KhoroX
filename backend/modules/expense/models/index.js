const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
    itemName: {type: String},
    itemPrice: {type: Number},
    amountPurchased: {type: Number},
});

module.exports = mongoose.model('Expense', ExpenseSchema);
