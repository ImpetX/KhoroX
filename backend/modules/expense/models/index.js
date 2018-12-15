const mongoose = require('mongoose');

const {Schema} = mongoose;

const ExpenseSchema = new Schema({
    itemName: {type: String},
    itemPrice: {type: Number},
    amountPurchased: {type: Number},
});

module.exports = mongoose.model('Expense', ExpenseSchema);
