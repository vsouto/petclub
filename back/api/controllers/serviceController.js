'use strict';

const mongoose = require('mongoose'),
  Service = mongoose.model('Service');


exports.listAll = function(req, res) {
    Service.find({}, function(err, services) {

    })
  .then(function(service) {
      res.json(service);
  })
};

exports.create = function(req, res) {

    Service.create(req.body, function(err, service) {
        if (err)
            res.send(err);
        res.json(service);
    })
};

exports.read = async function(req, res) {

    Service.findById(req.params.serviceId, function(err, service) {
        if (err)
            res.send(err);
        res.json(service);
    });
};

exports.update = function(req, res) {

    Service.findOneAndUpdate({_id: req.params.serviceId}, req.body, {new: true}, function(err, service) {
        if (err)
            res.send(err);
        res.json(service);
    });
};

exports.delete = function(req, res) {

    Service.remove({
        _id: req.params.serviceId
    }, function(err, service) {
        if (err)
            res.send(err);
        res.json({ message: 'Service successfully deleted' });
    });
};
