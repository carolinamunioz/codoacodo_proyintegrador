const express = require('express');
const router = express.Router();
const shopControllers = require ('../controllers/shopController');

router.get('/', shopControllers.home);
router.get('/item/:id', shopControllers.addItemId);
router.post('/item/:id/add', shopControllers.addItemId);
router.get('/cart', shopControllers.cart);
router.post('/cart',shopControllers.addCart);

module.exports = router;