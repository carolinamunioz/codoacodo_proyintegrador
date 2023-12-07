import { Router } from 'express';
const router = Router();
import { getAllProducts, createItem, saveNewProduct, getProductById } from '../controllers/adminController.js';

router.get('/', getAllProducts);
router.get('/create', createItem);
router.post('/create', saveNewProduct); 
router.get('/edit/:id', getProductById);
/*router.put('/edit/:id', adminControllers.saveItemById);
router.delete('/edit/:id', adminControllers.deleteItem);*/

export default router;