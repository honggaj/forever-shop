import express from "express";
import {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/orderController.js";

const router = express.Router();

// Lấy tất cả đơn hàng của user
router.get("/user/:userId", getOrders);

// Lấy 1 đơn hàng theo ID
router.get("/:id", getOrder);

// Tạo đơn hàng mới
router.post("/", createOrder);

// Update trạng thái đơn hàng
router.put("/:id", updateOrder);

// Xóa đơn hàng
router.delete("/:id", deleteOrder);

export default router;
