const express = require('express'),
  app = express(),
  cors = require('cors'),
  mongoose = require('mongoose'),
  User = require('./api/models/userModel'),
  Product = require('./api/models/productModel'),
  Service = require('./api/models/serviceModel'),
  Client = require('./api/models/clientModel'),
  Animal = require('./api/models/animalModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/petclub')

app.use(cors()); //enable cors on all requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const userRoutes = require('./api/routes/userRoutes');
userRoutes(app);

const productRoutes = require('./api/routes/productRoutes');
productRoutes(app);

const serviceRoutes = require('./api/routes/serviceRoutes');
serviceRoutes(app);

const clientRoutes = require('./api/routes/clientRoutes');
clientRoutes(app);

const animalRoutes = require('./api/routes/animalRoutes');
animalRoutes(app);

const port = process.env.PORT || 3001;
app.listen(port);
