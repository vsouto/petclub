'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductModelSchema = new Schema({
    title: {
        type: String,
        required: 'Favor informar o título '
    },
    price: {
        type: Number,
        required: 'Favor informar o preço '
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

// Getter
ProductModelSchema.path('price').get(function(num) {
    return (num / 100).toFixed(2);
});

// Setter
ProductModelSchema.path('price').set(function(num) {
    return num * 100;
});

module.exports = mongoose.model('Product', ProductModelSchema);
