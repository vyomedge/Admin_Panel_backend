
const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const { protect } = require('../middleware/auth');

router.get('/', protect, blogController.getAllBlogs);
router.post('/', protect, blogController.createBlog);

module.exports = router;
