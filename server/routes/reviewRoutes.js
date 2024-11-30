import express from 'express';
import reviewController from "../controllers/Review";

const router =express.Router();

router.post('/review',reviewController.create);
router.patch('/review/:id', reviewController.updateProdyctById);
router.delete('/review/:id', reviewController.deleteById);
router.get('/review/:id', reviewController.getProductById);

export default router;