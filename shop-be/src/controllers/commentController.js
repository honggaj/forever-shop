import * as commentService from "../services/commentService.js";

// Lấy tất cả comment (có thể theo productId)
export const getComments = async (req, res) => {
  try {
    const comments = await commentService.getAllComments(req.query.productId);
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lấy 1 comment
export const getCommentById = async (req, res) => {
  try {
    const comment = await commentService.getCommentById(req.params.id);
    if (!comment) return res.status(404).json({ message: "Không tìm thấy comment" });
    res.json(comment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Tạo comment mới
export const createComment = async (req, res) => {
  try {
    const savedComment = await commentService.createComment(req.body);
    res.status(201).json(savedComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update comment
export const updateComment = async (req, res) => {
  try {
    const updated = await commentService.updateComment(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Xóa comment
export const deleteComment = async (req, res) => {
  try {
    await commentService.deleteComment(req.params.id);
    res.json({ message: "Đã xóa comment" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
