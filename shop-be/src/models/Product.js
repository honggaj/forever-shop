import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },

    // Category chỉ 1 loại duy nhất
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },

    size: [{ type: String }],   // ["S","M","L","XL"] hoặc ["38","39"] cho giày
    color: [{ type: String }],  // ["white","black"]
    // description: { type: String },
    images: [{ type: String }], // lưu nhiều ảnh
    stock: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
