import Order from "../models/Order.js";

// Lấy tất cả đơn hàng của user
export const getOrdersByUser = async (userId) => {
  return await Order.find({ userId }).populate("products.productId");
};

// Lấy đơn hàng theo ID
export const getOrderById = async (id) => {
  return await Order.findById(id).populate("products.productId");
};

// Tạo đơn hàng mới
export const createOrder = async ({ userId, products }) => {
  const totalPrice = products.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const newOrder = new Order({
    userId,
    products,
    totalPrice,
    status: "pending",
  });

  return await newOrder.save();
};

// Update trạng thái đơn hàng
export const updateOrderStatus = async (id, status) => {
  return await Order.findByIdAndUpdate(id, { status }, { new: true });
};

// Xóa đơn hàng
export const deleteOrder = async (id) => {
  return await Order.findByIdAndDelete(id);
};
