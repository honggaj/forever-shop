import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
