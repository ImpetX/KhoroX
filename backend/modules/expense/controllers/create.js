const Models = require('../models');

function create(req, res) {
    const {itemName,
        itemPrice,
        amountPurchased} = req.body;

    const Expense = new Models.Expense({
        itemName,
        itemPrice,
        amountPurchased,
    });

    Expense
        .save()
        .then(data => {
            return res
                .status(200)
                .json({
                    itemName,
                    itemPrice,
                    amountPurchased,
                });
        })
        .catch(error => {
            return res
                .status(500)
                .json({error});
        });
}

module.exports = create;
