const mongoose = require('mongoose');
const databaseURL = 'mongodb://localhost:27017/inventory_application';
const { Item, Categorie } = require('./models/populatedb');
const { createItem, createCategorie } = require('./controllers/itemController');

mongoose.connect(databaseURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

createItem()
createCategorie()


module.exports = mongoose.connection;
