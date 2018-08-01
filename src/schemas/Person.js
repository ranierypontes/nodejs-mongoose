const mongoose = require('mongoose');

const Person = new mongoose.Schema({
    name: {
        firstName: String,
        lastname: String
    },
    age: {
        type: Number
    }
});

module.exports = mongoose.model('Person', Person);