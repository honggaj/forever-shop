import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

// fix __dirname trong ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// setup storage
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.join(__dirname, "../uploads/")); // folder uploads
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// filter file (chỉ cho phép ảnh)
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("Chỉ được upload file ảnh!"), false);
  }
};

const upload = multer({ storage, fileFilter });

// POST /api/upload
router.post("/", upload.single("image"), (req, res) => {
  res.json({
    message: "Upload thành công",
    filePath: `/uploads/${req.file.filename}`,
  });
});

export default router;
