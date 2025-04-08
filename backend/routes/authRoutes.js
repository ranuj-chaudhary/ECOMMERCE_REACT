import express from 'express';
import authController from '../controllers/authController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
const router = express.Router();

router.post('/login', authController.admin_login);
router.post('/register', authController.admin_register);



router.get('/get_user', authMiddleware, authController.get_user);

router.get('/logout', authMiddleware, authController.logout);

export default router;  
