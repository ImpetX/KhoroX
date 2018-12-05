const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const auth = require('../../auth');
const Users = mongoose.model('Users');

router.get('/current', auth.required, (req, res, next) => {
    const {payload: {id}} = req;

    return Users.findById(id)
        .then(user => {
            if(!user) {
                return res.sendStatus(400);
            }

            return res.json({
                user: user.toAuthJSON(),
            });
        });
});
