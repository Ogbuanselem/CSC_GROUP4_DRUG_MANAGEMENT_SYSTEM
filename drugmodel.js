const mongoose = require('mongoose');

// Define a drug schema
const drugSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dosage: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    expiry: {
        type: Date,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

// Create a model from the schema
const Drug = mongoose.model('Drug', drugSchema);

module.exports = Drug;
