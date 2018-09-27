const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route'); // Imports routes for the products
const app = express();
let port = 1234;


// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost/products';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);


// Run the server
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
