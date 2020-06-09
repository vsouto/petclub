'use strict';

const mongoose = require('mongoose'),
  Animal = mongoose.model('Animal');


exports.listAll = function(req, res) {
    Animal.find({}, function(err, animals) {

    })
  .then(function(animal) {
      res.json(animal);
  })
};

exports.create = function(req, res) {

    Animal.create(req.body, function(err, animal) {
        if (err)
            res.send(err);
        res.json(animal);
    })
};

exports.read = async function(req, res) {

    Animal.findById(req.params.animalId, function(err, animal) {
        if (err)
            res.send(err);
        res.json(animal);
    });
};

exports.update = function(req, res) {

    Animal.findOneAndUpdate({_id: req.params.animalId}, req.body, {new: true}, function(err, animal) {
        if (err)
            res.send(err);
        res.json(animal);
    });
};

exports.delete = function(req, res) {

    Animal.remove({
        _id: req.params.animalId
    }, function(err, animal) {
        if (err)
            res.send(err);
        res.json({ message: 'Animal successfully deleted' });
    });
};
