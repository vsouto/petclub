'use strict';

const mongoose = require('mongoose'),
  Product = mongoose.model('Product');


exports.listAll = function(req, res) {
    Product.find({}, function(err, products) {

    })
  .then(function(product) {
      res.json(product);
  })
};

exports.create = function(req, res) {

    Product.create(req.body, function(err, product) {
        if (err)
            res.send(err);
        res.json(product);
    })
};

exports.read = async function(req, res) {

    Product.findById(req.params.productId, function(err, product) {
        if (err)
            res.send(err);
        res.json(product);
    });
};

exports.update = function(req, res) {

    Product.findOneAndUpdate({_id: req.params.productId}, req.body, {new: true}, function(err, product) {
        if (err)
            res.send(err);
        res.json(product);
    });
};

exports.delete = function(req, res) {

    Product.remove({
        _id: req.params.productId
    }, function(err, product) {
        if (err)
            res.send(err);
        res.json({ message: 'Product successfully deleted' });
    });
};
