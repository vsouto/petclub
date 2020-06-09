'use strict';

const mongoose = require('mongoose'),
  Client = mongoose.model('Client');


exports.listAll = function(req, res) {
    Client.find({}, function(err, clients) {

    })
  .then(function(client) {

      /*const Animal = mongoose.model('Animal');

      // TODO: get animals of the client
      for (let i=0; i<=client.length; i++) {

          console.log('client is ', client[i]); //eslint-disable-line
          for (let j=0; j<=client[i].animal.length; j++) {
              client[i].animal[j] = async await Animal.findById(client[i].animal[j])
          }
      }*/

      res.json(client);
  })
};

exports.create = function(req, res) {

    Client.create(req.body, function(err, client) {
        if (err)
            res.send(err);
        res.json(client);
    })
};

exports.read = async function(req, res) {

    Client.findById(req.params.clientId, function(err, client) {
        if (err)
            res.send(err);
        res.json(client);
    });
};

exports.update = function(req, res) {

    Client.findOneAndUpdate({_id: req.params.clientId}, req.body, {new: true}, function(err, client) {
        if (err)
            res.send(err);
        res.json(client);
    });
};

exports.delete = function(req, res) {

    Client.remove({
        _id: req.params.clientId
    }, function(err, client) {
        if (err)
            res.send(err);
        res.json({ message: 'Client successfully deleted' });
    });
};
