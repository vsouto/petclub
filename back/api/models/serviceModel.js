'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceModelSchema = new Schema({
    title: {
        type: String,
        required: 'Favor informar o título '
    },
    discount: {
        type: Number,
        required: false
    },
    product: [Schema.Types.ObjectId],
    status: {
        type: [{
            type: String,
            enum: ['open', 'done', 'closed', 'cancelled']
        }],
        default: ['open']
    },
    createdDate: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Service', ServiceModelSchema);
