const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const User = require('../models');
const generateJWT = require('./generateJWT');

function signup(req, res) {
    const {email, password} = req.body;

    bcrypt
        .hash(password, 10)
        .then(hash => {
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                email,
                password: hash,
            });

            return user
                .save()
                .then(result => {
                    const {id, email} = result;
                    res
                        .status(201)
                        .json({
                            user: {
                                id,
                                email,
                                token: generateJWT(id, email),
                            },
                        });
                });
        })
        .catch(err => res
            .status(500)
            .json({
                error: err.message,
            }));
}

module.exports = signup;
