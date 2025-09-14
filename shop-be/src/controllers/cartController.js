import * as cartService from "../services/cartService.js";

// GET /api/carts/:userId
export const getCart = async (req, res) => {
  try {
    const cart = await cartService.getCartByUser(req.params.userId);
    res.json(cart || { items: [] });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/carts
export const addCartItem = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    const cart = await cartService.addToCart(userId, productId, quantity);
    res.status(201).json(cart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT /api/carts
export const updateCartItem = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    const cart = await cartService.updateCartItem(userId, productId, quantity);
    res.json(cart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE /api/carts/:userId/:productId
export const removeCartItem = async (req, res) => {
  try {
    const cart = await cartService.removeCartItem(req.params.userId, req.params.productId);
    res.json(cart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE /api/carts/:userId
export const clearCart = async (req, res) => {
  try {
    const cart = await cartService.clearCart(req.params.userId);
    res.json(cart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
