'use strict';

const mongoose = require('mongoose'),
  User = mongoose.model('User');


exports.listAll = function(req, res) {
    User.find({}, function(err, users) {

    })
  .then(function(user) {
      res.json(user);
  })
};

exports.create = function(req, res) {

    User.create(req.body, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    })
};

exports.read = async function(req, res) {

    User.findById(req.params.userId, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.update = function(req, res) {

    User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.delete = function(req, res) {

    User.remove({
        _id: req.params.userId
    }, function(err, user) {
        if (err)
            res.send(err);
        res.json({ message: 'User successfully deleted' });
    });
};
