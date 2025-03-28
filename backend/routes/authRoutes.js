import express from 'express';
import authController from '../controllers/authController.js';
const router = express.Router();

router.post('/login', authController.admin_login);
router.post('/register', authController.admin_register);
router.get('/users', authController.admin_users);

export default router;
