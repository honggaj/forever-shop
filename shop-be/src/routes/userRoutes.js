import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  addFavorite,
  removeFavorite
} from "../controllers/userController.js";

const router = express.Router();

// CRUD
router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

// Favorites
router.post("/:id/favorites", addFavorite);
router.delete("/:id/favorites", removeFavorite);

export default router;
