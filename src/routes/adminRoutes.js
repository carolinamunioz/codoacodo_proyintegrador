const express = require('express');
const router = express.Router();
const adminControllers = require ('../controllers/adminController')

router.get('/', adminControllers.home);
router.get('/create', adminControllers.createItem);
router.post('/create', adminControllers.saveItem);
router.get('/edit/:id', adminControllers.itemById);
router.put('/edit/:id', adminControllers.saveItemById);
router.delete('/edit/:id',adminControllers.deleteItem);

module.exports = router;