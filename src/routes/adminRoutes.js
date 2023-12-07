import { Router } from 'express';
const router = Router();
import { getAllProducts, createItem, saveNewProduct, getProductById, updateProduct, deleteProduct} from '../controllers/adminController.js';

router.get('/', getAllProducts);
router.get('/create', createItem);
router.post('/create', saveNewProduct); 
router.get('/edit/:id', getProductById);
router.post('/edit/:id', updateProduct);
router.get('/delete/:id', deleteProduct);

export default router;