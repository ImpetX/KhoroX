const bcrypt = require('bcrypt');

const User = require('../models');

function signup(req, res) {
    const {email, password} = req;

    bcrypt
        .hash(password, 10)
        .then(hash => {
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                email: email,
                password: hash,
            });

            return user
                .save()
                .then(() => res
                    .status(201)
                    .json({
                        user: user.toAuthJSON(),
                    }));
        })
        .catch(err => res
            .status(500)
            .json({
                error: err,
            }));
}

module.exports = signup;
