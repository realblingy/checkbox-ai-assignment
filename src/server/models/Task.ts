export type Task = {
    id: number,
    name: string,
    description: string,
    due_date: number,
    created_date: number,
}

const tasks: Task[] = []

const getAllTasks = () => {
    return tasks
}

const createNewTask = (name: string, description: string, due_date: number) => {
    const newTask: Task = {
        id: tasks.length + 1,
        name,
        description,
        due_date,
        created_date: Date.now()
    }

    tasks.push(newTask);

    return newTask;
}

const updateTask = (taskId: number, metadata: { name?: string, description?: string, due_date?: number }) => {
    const taskToUpdate = tasks.find(task => task.id === taskId);

    if (!taskToUpdate) {
        return undefined
    }

    const { name, description, due_date } = metadata

    taskToUpdate.name = name || taskToUpdate.name;
    taskToUpdate.description = description || taskToUpdate.description;
    taskToUpdate.due_date = due_date || taskToUpdate.due_date;

    return taskToUpdate;
}

const getTaskById = (taskId: number): Task | undefined => {
    return tasks.find(task => task.id === taskId);
}

export default {
    getAllTasks,
    createNewTask,
    updateTask,
    getTaskById
}