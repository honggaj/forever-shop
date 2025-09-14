import User from "../models/User.js";
import bcrypt from "bcryptjs";

// Tạo user mới
export const createUser = async ({ name, email, password, role }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ name, email, password: hashedPassword, role });
  return await newUser.save();
};

// Lấy tất cả user
export const getAllUsers = async () => {
  return await User.find().select("-password"); // không trả password
};

// Lấy user theo id
export const getUserById = async (id) => {
  return await User.findById(id).select("-password");
};

// Cập nhật user
export const updateUser = async (id, data) => {
  if (data.password) {
    data.password = await bcrypt.hash(data.password, 10);
  }
  return await User.findByIdAndUpdate(id, data, { new: true }).select("-password");
};

// Xóa user
export const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

// Thêm sản phẩm vào favorites
export const addFavorite = async (userId, productId) => {
  const user = await User.findById(userId);
  if (!user.favorites.includes(productId)) {
    user.favorites.push(productId);
    await user.save();
  }
  return user;
};

// Xóa sản phẩm khỏi favorites
export const removeFavorite = async (userId, productId) => {
  const user = await User.findById(userId);
  user.favorites = user.favorites.filter(id => id.toString() !== productId);
  await user.save();
  return user;
};
