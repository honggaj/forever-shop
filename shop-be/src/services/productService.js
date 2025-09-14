import Product from "../models/Product.js";

// Lấy tất cả sản phẩm
export const getAllProducts = async () => {
  return await Product.find();
};

// Lấy 1 sản phẩm theo ID
export const getProductById = async (id) => {
  return await Product.findById(id);
};

// Tạo sản phẩm mới
export const createProduct = async (data, files) => {
  const imagePaths = files ? files.map(file => `/uploads/${file.filename}`) : [];
  const { name, price, category, type, size, color, description, stock } = data;

  const newProduct = new Product({
    name,
    price,
    category,
    type,
     size: Array.isArray(size) ? size : size ? [size] : [],   // ✅ check nếu là array
    color: Array.isArray(color) ? color : color ? [color] : [],
    description,
    stock,
    images: imagePaths,
  });

  return await newProduct.save();
};

// Update sản phẩm
export const updateProduct = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, { new: true });
};

// Xóa sản phẩm
export const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};
