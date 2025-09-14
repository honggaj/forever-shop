import express from "express";
import {
  getComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment
} from "../controllers/commentController.js";

const router = express.Router();

// Routes
router.get("/", getComments);                // /api/comments?productId=p1
router.get("/:id", getCommentById);
router.post("/", createComment);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);

export default router;
