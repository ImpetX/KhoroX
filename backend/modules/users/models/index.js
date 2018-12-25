const mongoose = require('mongoose');
const mongooseAutoIncrementID = require('mongoose-auto-increment-reworked');

const {MongooseAutoIncrementID} = mongooseAutoIncrementID;

const {Schema} = mongoose;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },
    password: {
        type: String,
        required: true,
    },
});

MongooseAutoIncrementID.initialise('UserIdCount');

UserSchema.plugin(MongooseAutoIncrementID.plugin, {
    modelName: 'User',
});

module.exports = mongoose.model('User', UserSchema);
