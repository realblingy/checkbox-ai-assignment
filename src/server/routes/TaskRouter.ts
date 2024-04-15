import express from "express";
import { createTask, getTasks, searchTasks, updateTask } from "../controllers/TaskController.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/create", createTask)
router.put("/update", updateTask);
router.get("/search", searchTasks);

export default router