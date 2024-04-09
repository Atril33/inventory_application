const mongoose = require('mongoose');

const createItemModel = new mongoose.Schema({
  name: String,
  description: String,
  url: String,
});

const createCategorieModel = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  price: Number,
  url: String,
});

const Item = mongoose.model('Item', createItemModel);
const Categorie = mongoose.model('Categorie', createCategorieModel);

module.exports = {
  Item, Categorie
}




