import Product from "../models/Product.js";
import Category from "../models/Category.js";

export const getAllProducts = async (sortBy = "createdAt", order = "desc", categorySlug) => {
  const sortOptions = {
    price: "price",
    name: "name",
    createdAt: "createdAt",
  };

  const sortField = sortOptions[sortBy] || "createdAt";
  const sortOrder = order === "asc" ? 1 : -1;

  let filter = {};

if (categorySlug) {
  const category = await Category.findOne({ slug: new RegExp("^" + categorySlug + "$", "i") });
  if (category) {
    filter.category = category._id;
  } else {
    return [];
  }
}


  return await Product.find(filter)
    .populate("category", "name slug") // populate để FE dễ dùng
    .sort({ [sortField]: sortOrder });
};

// export const getAllProducts = async () => {
//   return await Product.find();
// };


// Lấy 1 sản phẩm theo ID
export const getProductById = async (id) => {
  return await Product.findById(id);
};
// Tạo sản phẩm mới
export const createProduct = async (data, files) => {
  const imagePaths = files ? files.map(file => `/uploads/${file.filename}`) : [];
  const { name, price, categoryId, size, color, stock, description } = data;

  const newProduct = new Product({
    name,
    price,
    category: categoryId, // <-- đây là ObjectId của Category
    size: Array.isArray(size) ? size : size ? [size] : [],
    color: Array.isArray(color) ? color : color ? [color] : [],
    description,
    stock,
    images: imagePaths,
  });

  return await newProduct.save();
};

// Update sản phẩm
export const updateProduct = async (id, data, files) => {
  const updateData = { ...data };

  // Nếu upload ảnh mới
  if (files && files.length > 0) {
    updateData.images = files.map(file => `/uploads/${file.filename}`);
  }

  // Cập nhật category nếu có
  if (data.categoryId) updateData.category = data.categoryId;

  // Chắc chắn size và color là array
  if (data.size) updateData.size = Array.isArray(data.size) ? data.size : [data.size];
  if (data.color) updateData.color = Array.isArray(data.color) ? data.color : [data.color];

  return await Product.findByIdAndUpdate(id, updateData, { new: true });
};

// Xóa sản phẩm
export const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};
