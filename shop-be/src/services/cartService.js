import Cart from "../models/Cart.js";

// Lấy giỏ hàng theo user
export const getCartByUser = async (userId) => {
  return await Cart.findOne({ userId }).populate("items.productId");
};

// Thêm sản phẩm vào giỏ
export const addToCart = async (userId, productId, quantity = 1) => {
  let cart = await Cart.findOne({ userId });

  if (!cart) {
    cart = new Cart({ userId, items: [{ productId, quantity }] });
  } else {
    const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
    if (itemIndex > -1) {
      // Nếu sản phẩm đã có trong giỏ → cộng dồn số lượng
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }
  }

  return await cart.save();
};

// Cập nhật số lượng sản phẩm
export const updateCartItem = async (userId, productId, quantity) => {
  const cart = await Cart.findOne({ userId });
  if (!cart) throw new Error("Cart not found");

  const item = cart.items.find(item => item.productId.toString() === productId);
  if (!item) throw new Error("Product not in cart");

  item.quantity = quantity;
  return await cart.save();
};

// Xóa sản phẩm khỏi giỏ
export const removeCartItem = async (userId, productId) => {
  const cart = await Cart.findOne({ userId });
  if (!cart) throw new Error("Cart not found");

  cart.items = cart.items.filter(item => item.productId.toString() !== productId);
  return await cart.save();
};

// Xóa toàn bộ giỏ
export const clearCart = async (userId) => {
  return await Cart.findOneAndUpdate({ userId }, { items: [] }, { new: true });
};
