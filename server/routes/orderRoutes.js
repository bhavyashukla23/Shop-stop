import express from "express";
import orderController from "../controllers/Order.js";

const router = express.Router();

router.post("/" , orderController.createOrder);
router.get("/order" , orderController.getAll);
router.get("/user/:id" , orderController.getOderByUserId);
router.patch("/updateOrder/:id" , orderController.updateOrderById);

export default router;
