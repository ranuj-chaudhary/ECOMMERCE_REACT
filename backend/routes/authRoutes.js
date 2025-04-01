import express from 'express';
import authController from '../controllers/authController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
const router = express.Router();

router.post('/login', authController.admin_login);
router.post('/register', authController.admin_register);
router.get('/users', authMiddleware, authController.getUser);

export default router;
