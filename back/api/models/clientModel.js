'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

const ClientModelSchema = new Schema({
    name: {
        type: String,
        required: 'Favor informar o nome '
    },
    email: {
        type: String,
        required: 'Favor informar o email ',
        unique: true
    },
    animal: [Schema.Types.ObjectId],
    createdDate: {
        type: Date,
        default: Date.now()
    }
});

ClientModelSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Client', ClientModelSchema);
