import express from "express";
import TaskController from "../controllers/TaskController.js";

const router = express.Router();

router.get("/", TaskController.getAllTasks);
router.get("/:id", TaskController.getTaskById)
router.post("/create", TaskController.createTask)
router.put("/update/:id", TaskController.updateTask);

export default router