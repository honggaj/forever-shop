import express from "express";
import {
  getCart,
  addCartItem,
  updateCartItem,
  removeCartItem,
  clearCart,
} from "../controllers/cartController.js";

const router = express.Router();

router.get("/:userId", getCart);
router.post("/", addCartItem);
router.put("/", updateCartItem);
router.delete("/:userId/:productId", removeCartItem);
router.delete("/:userId", clearCart);

export default router;
