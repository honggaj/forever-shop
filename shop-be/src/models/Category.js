import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },      // tên category
    slug: { type: String, required: true },      // dùng cho URL
    image: { type: String },                      // ảnh đại diện
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);
export default Category;
