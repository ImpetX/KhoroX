const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const User = require('../models');
const generateJWT = require('./generateJWT');

async function signup(req, res) {
    const {email, password} = req.body;

    try {
        const user = await User.find({email}).exec();
        if (user.length >= 1) {
            const error = new Error();
            error.code = 409;

            throw(error);
        } else {
            const hash = await bcrypt.hash(password, 10);
            const user = new User({
                email,
                password: hash,
            });

            const savedUser = await user.save();
            const token = await generateJWT(savedUser.id, savedUser.email);

            return res
                .status(201)
                .json({
                    user: {
                        id: savedUser.id,
                        email: savedUser.email,
                        token,
                    },
                });

        }
    } catch(e) {
        if(e.code === 409) {
            return res
                .status(409)
                .json({
                    duplicateEmail: true,
                });
        }
        return res
            .status(500)
            .json({
                error: e.message,
            });
    }
}

module.exports = signup;
