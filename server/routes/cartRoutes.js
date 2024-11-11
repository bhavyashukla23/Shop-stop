import express from "express";
import cartController from "../controllers/Cart";

const router =express.Router();

router.post("/" . cartController.createCart);
router.patch("/:id" , cartController.updateCartById);
router.get("/user/:id" , cartController.getCartByUserId);
router.delete("/user/:id" , cartController.deleteCartByUserId);
router.delete("/:id"  , cartController.deleteCartById);


export default router;