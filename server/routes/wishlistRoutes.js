import express from "express";
import wishlistController from "../controllers/Wishlist.js";

const router = express.Router();

router.post("/" , wishlistController.createWishlist);
router.get("/user/:id" , wishlistController.getWishlistByUserId);
router.delete("/:id" , wishlistController.deleteWishlistById);
router.patch("/:id" , wishlistController.updateWishlistById);


export default router;
