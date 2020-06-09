'use strict';
module.exports = function(app) {
  const client = require('../controllers/clientController');

  app.route('/client')
    .get(client.listAll)
    .post(client.create);

  app.route('/client/:clientId')
    .get(client.read)
    .put(client.update)
    .delete(client.delete);

};
