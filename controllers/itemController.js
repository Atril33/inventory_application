const { Categorie } = require('../models/populatedb');

const Item = require('../models/populatedb').Item;

const createItem = async () => {
    await Item.create({
        name: 'Item 1',
        description: 'Description of Item 1',
        url: 'https://www.google.com'
    });
}


const createCategorie = async () => {
    await Categorie.create({
        name: 'Item 1',
        description: 'This is how it works',
        price: 100,
    })
}


module.exports = {
    createItem, createCategorie
}