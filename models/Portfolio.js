const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  images: [{ type: String, required: true }],  // Cloudinary URLs ka array
}, { timestamps: true });

module.exports = mongoose.model('Portfolio', portfolioSchema);
