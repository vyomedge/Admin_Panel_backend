// controllers/blogController.js
const getPanelDb = require('../config/dbManager');

exports.getAllBlogs = async (req, res) => {
  try {
    const { panel } = req.user; // 👈 decoded from JWT
    const { Blog } = getPanelDb(panel); // 👈 auto-connect to correct DB

    const blogs = await Blog.find();
    res.status(200).json({ blogs });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch blogs' });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const { panel } = req.user;
    const { Blog } = getPanelDb(panel);

    const blog = await Blog.create(req.body);
    res.status(201).json({ blog });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to create blog' });
  }
};
