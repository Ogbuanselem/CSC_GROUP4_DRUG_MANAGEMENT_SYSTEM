const express = require('express');
const router = express.Router();
const Drug = require('../models/drugModel');

// Get all drugs from the inventory
router.get('/', async (req, res) => {
    try {
        const drugs = await Drug.find();
        res.json(drugs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new drug to the inventory
router.post('/', async (req, res) => {
    const { name, dosage, manufacturer, expiry, quantity } = req.body;

    const newDrug = new Drug({
        name,
        dosage,
        manufacturer,
        expiry,
        quantity
    });

    try {
        const savedDrug = await newDrug.save();
        res.status(201).json(savedDrug);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Search/filter drugs by name or expiry date
router.get('/search', async (req, res) => {
    const { query } = req.query; // Get the search query from the request
    try {
        const filteredDrugs = await Drug.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { expiry: { $regex: query, $options: 'i' } }
            ]
        });
        res.json(filteredDrugs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
