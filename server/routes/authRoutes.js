import express from 'express';
import router from express.Router();
import authController from '../controllers/Auth';
import {verifyToken} from '../middleware/verifyToken';

router.post('/signup' , authController.signup);
router.post('/login' , authController.login);
router.get('/logout', authController.logout);
router.post('/forgot-password' , authController.forgotPassword);
router.post('/verify-otp' , authController.verifyOtp);
router.post('/verify-token' , authController.verifyToken);
router.post('resend-otp' , authController.resendOtp);
router.get('/check-auth' , verifyToken , authController.checkAuth);


export default router;