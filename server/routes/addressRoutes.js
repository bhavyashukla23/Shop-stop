import express from 'express';
import addressController from '../controllers/Address';

const router = express.Router();

router.post('/address' , addressController.create);
router.get('/address/user/:id', addressController.getByUserId);
router.delete('/address/:id' , addressController.deleteById);
router.patch('/address/:id' ,addressController.updateById);

export default router;