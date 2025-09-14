import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// setup storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, "../uploads/")),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

// filter file (chỉ cho phép ảnh)
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) cb(null, true);
  else cb(new Error("Chỉ được upload file ảnh!"), false);
};

const upload = multer({ storage, fileFilter });

// Routes
router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", upload.array("images", 5), createProduct); // upload nhiều ảnh
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
