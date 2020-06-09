'use strict';
module.exports = function(app) {
  const animal = require('../controllers/animalController');

  app.route('/animal')
    .get(animal.listAll)
    .post(animal.create);

  app.route('/animal/:animalId')
    .get(animal.read)
    .put(animal.update)
    .delete(animal.delete);

};
