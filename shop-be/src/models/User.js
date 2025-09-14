import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // hash password
  role: { type: String, default: "user" },    // user | admin
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }]
}, { timestamps: true });

export default mongoose.model("User", userSchema);
