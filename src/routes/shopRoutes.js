import { Router } from 'express';
const router = Router();
import { shopControllers } from '../controllers/shopController.js';

router.get('/', shopControllers.home);
router.get('/item/:id', shopControllers.getItemId);
router.post('/item/:id/add', shopControllers.addItemId);
router.get('/cart', shopControllers.cart);
router.post('/cart', shopControllers.addCart);

export default router;