const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String },
    image: { type: String }, // optional
    tags: [String],
  },
  { timestamps: true }
);

module.exports = blogSchema;
