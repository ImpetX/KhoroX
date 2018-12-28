const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const User = require('../models');
const generateJWT = require('./generateJWT');

function signup(req, res) {
    const {email, password} = req.body;

    User
        .find({email})
        .exec()
        .then(user => {
            if(user.length >= 1){
                return res
                    .status(409)
                    .json({
                        duplicateEmail: true,
                    });
            } else {
                bcrypt
                    .hash(password, 10)
                    .then(hash => {
                        const user = new User({
                            email,
                            password: hash,
                        });

                        user
                            .save()
                            .then(result => Promise.all([result, generateJWT(result.id, result.email)]))
                            .then(([result, token]) => {
                                res
                                    .status(201)
                                    .json({
                                        user: {
                                            id: result.id,
                                            email: result.email,
                                            token,
                                        },
                                    });
                            })
                            .catch(err => res
                                .status(500)
                                .json({
                                    error: err.message,
                                })
                            );
                    })
                    .catch(err => res
                        .status(500)
                        .json({
                            error: err.message,
                        })
                    );
            }
        })
        .catch(err => res
            .status(500)
            .json({
                error: err.message,
            })
        );
}

module.exports = signup;


// const {id, email} = result;
// res
//     .status(201)
//     .json({
//         user: {
//             _id: id,
//             email,
//             token: generateJWT(id, email),
//         },
//     });
