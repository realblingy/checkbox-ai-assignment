import pool from "../database.js"

export type Task = {
    id: number,
    name: string,
    description: string,
    due_date: string,
    create_date: string,
}

const getAllTasks = async () => {
    const { rows } = await pool.query('SELECT * FROM tasks ORDER BY id');
    return rows;
}

const createNewTask = async (name: string, description: string, due_date: number) => {
    const create_date = (new Date()).toISOString();

    const { rows } = await pool.query(
        'INSERT INTO tasks (name, description, due_date, create_date) VALUES ($1, $2, $3, $4) RETURNING *',
        [name, description, due_date, create_date]
    );

    return rows[0];
}

// Function to update an existing task in the database
const updateTask = async (taskId: number, metadata: { name?: string, description?: string, due_date?: number }) => {
    const { name, description, due_date } = metadata;
    const updateQueryParams: string[] = [];
    const updateQueryValues: any[] = [];

    if (name !== undefined) {
        updateQueryParams.push('name = $1');
        updateQueryValues.push(name);
    }
    if (description !== undefined) {
        updateQueryParams.push('description = $2');
        updateQueryValues.push(description);
    }
    if (due_date !== undefined) {
        updateQueryParams.push('due_date = $3');
        updateQueryValues.push(due_date);
    }

    if (updateQueryParams.length === 0) {
        return undefined; // No valid update parameters provided
    }

    // Construct the UPDATE query dynamically
    const updateQuery = `
        UPDATE tasks 
        SET ${updateQueryParams.join(', ')} 
        WHERE id = $${updateQueryValues.length + 1} 
        RETURNING *`;

    // Execute the UPDATE query with parameter values
    const { rows } = await pool.query(updateQuery, [...updateQueryValues, taskId]);

    return rows[0]; // Return the updated task
}

// Function to retrieve a task by ID from the database
const getTaskById = async (taskId: number) => {
    const { rows } = await pool.query('SELECT * FROM tasks WHERE id = $1', [taskId]);
    return rows[0]; // Return the task if found, otherwise undefined
}

export default {
    getAllTasks,
    createNewTask,
    updateTask,
    getTaskById
}