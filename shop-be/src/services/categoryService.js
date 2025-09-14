import Category from "../models/Category.js";

export const getAllCategories = async () => {
  return await Category.find();
};

export const getCategoryById = async (id) => {
  return await Category.findById(id);
};

export const createCategory = async (data, file) => {
  const newCategory = new Category({
    name: data.name,
    slug: data.slug,
    image: file ? `/uploads/${file.filename}` : null,
  });
  return await newCategory.save();
};

export const updateCategory = async (id, data, file) => {
  const updateData = {
    ...data,
  };
  if (file) updateData.image = `/uploads/${file.filename}`;
  return await Category.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteCategory = async (id) => {
  return await Category.findByIdAndDelete(id);
};
