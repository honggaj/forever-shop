import * as orderService from "../services/orderService.js";

// Lấy tất cả đơn hàng của user
export const getOrders = async (req, res) => {
  try {
    const orders = await orderService.getOrdersByUser(req.params.userId);
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lấy đơn hàng theo ID
export const getOrder = async (req, res) => {
  try {
    const order = await orderService.getOrderById(req.params.id);
    if (!order) return res.status(404).json({ message: "Không tìm thấy đơn hàng" });
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Tạo đơn hàng mới
export const createOrder = async (req, res) => {
  try {
    const order = await orderService.createOrder(req.body);
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update trạng thái đơn hàng
export const updateOrder = async (req, res) => {
  try {
    const order = await orderService.updateOrderStatus(req.params.id, req.body.status);
    res.json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Xóa đơn hàng
export const deleteOrder = async (req, res) => {
  try {
    await orderService.deleteOrder(req.params.id);
    res.json({ message: "Đã xóa đơn hàng" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
