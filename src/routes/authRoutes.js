import { Router } from 'express';
const router = Router();
import { authControllers, loginPOST } from '../controllers/authController.js';

router.get('/login', authControllers.getLogin);
router.post('/login', loginPOST);
router.get('/register', authControllers.getRegister);
router.post('/register', authControllers.saveRegister);
router.get('/logout', authControllers.logout);

export default router;