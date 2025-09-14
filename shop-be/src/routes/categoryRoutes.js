import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// setup storage cho ảnh category
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, "../uploads/")),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) cb(null, true);
  else cb(new Error("Chỉ được upload ảnh!"), false);
};

const upload = multer({ storage, fileFilter });

// Routes
router.get("/", getCategories);
router.get("/:id", getCategoryById);
router.post("/", upload.single("image"), createCategory); // upload 1 ảnh
router.put("/:id", upload.single("image"), updateCategory);
router.delete("/:id", deleteCategory);

export default router;
