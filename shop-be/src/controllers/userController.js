import * as userService from "../services/userService.js";

// Tạo user
export const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Lấy tất cả user
export const getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lấy 1 user theo id
export const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Cập nhật user
export const updateUser = async (req, res) => {
  try {
    const updated = await userService.updateUser(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Xóa user
export const deleteUser = async (req, res) => {
  try {
    await userService.deleteUser(req.params.id);
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Thêm sản phẩm yêu thích
export const addFavorite = async (req, res) => {
  try {
    const user = await userService.addFavorite(req.params.id, req.body.productId);
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Xóa sản phẩm khỏi yêu thích
export const removeFavorite = async (req, res) => {
  try {
    const user = await userService.removeFavorite(req.params.id, req.body.productId);
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
