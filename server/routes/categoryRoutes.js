import express from 'express';
import categoryController from '../controllers/Category';

const router = express.Router();

router.get('/category', categoryController.getAll);

export default router;