import * as productService from "../services/productService.js";

// Lấy tất cả sản phẩm
export const getProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lấy 1 sản phẩm theo id
export const getProductById = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);
    if (!product) return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Tạo sản phẩm mới
export const createProduct = async (req, res) => {
  try {
    const savedProduct = await productService.createProduct(req.body, req.files);
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update sản phẩm
export const updateProduct = async (req, res) => {
  try {
    const updated = await productService.updateProduct(req.params.id, req.body, req.files);
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Xóa sản phẩm
export const deleteProduct = async (req, res) => {
  try {
    await productService.deleteProduct(req.params.id);
    res.json({ message: "Đã xóa sản phẩm" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
