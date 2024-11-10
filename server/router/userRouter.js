import express from "express";
import userController from "../controllers/Users.js";


const router = express.Router();

router.get("/:id", userController.getById);
router.patch("/:id" , userController.updateById);

export default router;