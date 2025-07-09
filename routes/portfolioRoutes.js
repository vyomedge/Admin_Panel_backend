const express = require('express');
const router = express.Router();
const multer = require('multer');
const portfolioController = require('../controllers/portfolioController');

const storage = multer.diskStorage({}); // ya memoryStorage bhi use kar sakte ho
const upload = multer({ storage });

// Portfolio create route with image upload middleware
router.post('/portfolio', upload.array('images', 10), portfolioController.createPortfolio);

// Baaki CRUD routes bhi yahin define kar sakte ho
router.get('/portfolio', portfolioController.getPortfolios);
router.put('/portfolio/:id', upload.array('images', 10), portfolioController.updatePortfolio);
router.delete('/portfolio/:id', portfolioController.deletePortfolio);

module.exports = router;
