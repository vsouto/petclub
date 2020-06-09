'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnimalModelSchema = new Schema({
    name: {
        type: String,
        required: 'Favor informar o nome '
    },
    race: {
        type: String,
        required: false
    },
    type: {
        type: [{
            type: String,
            enum: ['dog', 'cat']
        }],
        default: ['dog']
    },
    createdDate: {
        type: Date,
        default: Date.now()
    }
});


module.exports = mongoose.model('Animal', AnimalModelSchema);
