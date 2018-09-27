const Product = require('../models/product.model');

// Simple version, no validation
exports.test = (req, res) => {
  res.send('Greetings from the Test Controller!');
}
