const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const router = express.router();
const auth = require('../../auth');

router.post('/login', auth.optional, (req, res, next) => {
    const {body: {user}} = req;

    if(!user.email) {
        return res.status(422).json({
            errors: {
                email: 'is required',
            },
        });
    }

    if(!password.email) {
        return res.status(422).json({
            errors: {
                password: 'is required',
            },
        });
    }

    return passport.authenticate('local', {session: false}, (err, passportUser, info) => {
        if(err) {
            return next(err);
        }

        if(passportUser) {
            const user = passportUser;
            user.token = passportUser.generateJWT();

            return res.json({
                user: user.toAuthJSON(),
            });
        }

        return status(400).info;
    })(req, res, next);
});
