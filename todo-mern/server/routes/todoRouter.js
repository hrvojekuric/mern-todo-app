import express from "express";
import {
  getTodos,
  saveTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/controllers.js";

export const router = express.Router();

router.get("/", getTodos);

router.post("/save", saveTodo);

router.put("/edit", updateTodo);

router.delete("/delete/:id", deleteTodo);
