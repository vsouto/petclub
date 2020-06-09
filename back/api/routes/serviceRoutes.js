'use strict';
module.exports = function(app) {
  const service = require('../controllers/serviceController');

  app.route('/service')
    .get(service.listAll)
    .post(service.create);

  app.route('/service/:serviceId')
    .get(service.read)
    .put(service.update)
    .delete(service.delete);

};
