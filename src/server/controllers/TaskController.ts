import { Request, Response } from 'express';
import TaskModel from '../models/Task.js';

const getAllTasks = async (_req: Request, res: Response) => {
    try {
        const allTasks = await TaskModel.getAllTasks()
        return res.status(200).json(allTasks)
    } catch (error) {
        return res.status(400).json({ error })
    }
}

const createTask = async (req: Request, res: Response) => {
    const { name, description, due_date } = req.body

    if (!name || !description || !due_date) {
        return res.status(400).json({ error: `Must supply name, description and due date when creating a task.` });
    }

    const newTask = await TaskModel.createNewTask(name, description, due_date);

    return res.status(200).json(newTask);
}

const getTaskById = async (req: Request, res: Response) => {
    const taskId = parseInt(req.params.id);
    const task = await TaskModel.getTaskById(taskId);

    if (!task) {
        return res.status(400).json({ error: `Task with id: ${taskId} not found` });
    }

    return res.status(200).json(task);
}

const updateTask = (req: Request, res: Response) => {
    const taskId = parseInt(req.params.id);
    const { name, description, due_date } = req.body;
    const taskToUpdate = TaskModel.updateTask(taskId, { name, description, due_date })

    if (!taskToUpdate) {
        return res.status(404).json({ error: `Task with id: ${taskId} not found` });
    }

    res.status(200).json(taskToUpdate);
}

export default {
    updateTask,
    createTask,
    getAllTasks,
    getTaskById
}
