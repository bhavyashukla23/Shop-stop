import express from"express";
import productController from "../controllers/Products.js";

const router = express.Router();

router.post("/" , productController.createProducts);
router.get("/" , productController.getProducts);
router.get("/:id" , productController.getProductById);
router.patch("/:id" , productController.updateProductById);
router.patch("/undelete/:id" , productController.undeleteProductById);
router.delete("/:id" , productController.deleteProductById);

export default router;