const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const drugRoutes = require('./routes/drugRoutes');

// Initialize the app
const app = express();

// Middleware
app.use(express.json());  // Parse JSON request bodies
app.use(cors());  // Enable Cross-Origin Resource Sharing (CORS) for frontend requests

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/drug_inventory', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("MongoDB connection error:", err);
});

// API Routes
app.use('/api/drugs', drugRoutes)

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
