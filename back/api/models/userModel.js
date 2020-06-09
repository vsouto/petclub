'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

const UserModelSchema = new Schema({
    name: {
        type: String,
        required: 'Favor informar o nome '
    },
    email: {
        type: String,
        required: 'Favor informar o email ',
        unique: true
    },
    status: {
        type: [{
            type: String,
            enum: ['active', 'inactive']
        }],
        default: ['active']
    },
    createdDate: {
        type: Date,
        default: Date.now()
    }
});

UserModelSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', UserModelSchema);
