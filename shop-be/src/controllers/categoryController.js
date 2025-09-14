import * as categoryService from "../services/categoryService.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await categoryService.getAllCategories();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const category = await categoryService.getCategoryById(req.params.id);
    if (!category) return res.status(404).json({ message: "Không tìm thấy category" });
    res.json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createCategory = async (req, res) => {
  try {
    const savedCategory = await categoryService.createCategory(req.body, req.file);
    res.status(201).json(savedCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const updatedCategory = await categoryService.updateCategory(req.params.id, req.body, req.file);
    res.json(updatedCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    await categoryService.deleteCategory(req.params.id);
    res.json({ message: "Đã xóa category" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
