import express from 'express';
import brandController from '../controllers/Brand';

const router= express.Router();

router.get('/brand' , brandController.getAll);

export default router;