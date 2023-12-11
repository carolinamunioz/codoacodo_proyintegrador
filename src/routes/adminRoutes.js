import { Router } from 'express';
const router = Router();
import { getAllProducts, createItem, saveNewProduct, getProductById, updateProduct, deleteProduct} from '../controllers/adminController.js';

// session
const requiereAdmin = (req, res, next) => {
    if (!req.session.esAdmin) {
      return res.redirect("/auth/login");
    }
    next();
};


router.get('/', requiereAdmin, getAllProducts);
router.get('/create',requiereAdmin, createItem);
router.post('/create',requiereAdmin, saveNewProduct); 
router.get('/edit/:id',requiereAdmin, getProductById);
router.post('/edit/:id',requiereAdmin, updateProduct);
router.get('/delete/:id',requiereAdmin, deleteProduct);

export default router;