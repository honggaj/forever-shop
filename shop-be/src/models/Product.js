import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true }, // men / women / kids
    type: { type: String, required: true },     // shirt / pants / dress...

    size: [{ type: String }],  // ["S","M","L","XL"]
    color: [{ type: String }], // ["white","black"]

    description: { type: String },
    images: [{ type: String }], // lưu nhiều ảnh
    stock: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
