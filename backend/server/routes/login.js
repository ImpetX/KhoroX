const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const router = express.router();
const auth = require('../../auth');
const Users = mongoose.model('Users');

// login route code goes here
