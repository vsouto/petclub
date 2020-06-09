'use strict';
module.exports = function(app) {
  const product = require('../controllers/productController');

  app.route('/product')
    .get(product.listAll)
    .post(product.create);

  app.route('/product/:productId')
    .get(product.read)
    .put(product.update)
    .delete(product.delete);

};
