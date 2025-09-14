import Comment from "../models/Comment.js";

// Lấy tất cả comment (hoặc filter theo productId)
export const getAllComments = async (productId) => {
  if(productId) return await Comment.find({ productId }).populate("userId", "name");
  return await Comment.find().populate("userId", "name");
};

// Lấy 1 comment theo id
export const getCommentById = async (id) => {
  return await Comment.findById(id).populate("userId", "name");
};

// Tạo comment mới
export const createComment = async (data) => {
  const newComment = new Comment(data);
  return await newComment.save();
};

// Update comment
export const updateComment = async (id, data) => {
  return await Comment.findByIdAndUpdate(id, data, { new: true });
};

// Xóa comment
export const deleteComment = async (id) => {
  return await Comment.findByIdAndDelete(id);
};
