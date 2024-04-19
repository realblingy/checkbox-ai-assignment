import React, { ChangeEvent, FormEvent, useState } from 'react';

export interface TaskInput {
  id?: number;
  name: string;
  description: string;
  due_date: number;
}

interface TaskFormProps {
  handleFormSubmit: (taskInput: TaskInput) => void;
  task?: TaskInput;
}

const TaskForm: React.FC<TaskFormProps> = ({ handleFormSubmit, task }) => {
  const [taskInput, setTaskInput] = useState<TaskInput>(task ? task : {
    name: 'New Task',
    description: 'New Description',
    due_date: Date.now() + (14 * 24 * 60 * 60 * 1000) // 14 days * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTaskInput((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, description } = taskInput;
    if (name.length === 0 || description.length === 0) {
      alert("Must have name or description");
      return;
    }

    handleFormSubmit(taskInput);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={taskInput.name}
            onChange={handleChange}
            style={{ marginLeft: '10px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={taskInput.description}
            onChange={handleChange}
            style={{ marginLeft: '10px', verticalAlign: 'top' }}
          />
        </div>
        <label>
          Due Date:
          <input type="date" name="due_date" value={taskInput.due_date} onChange={handleChange} />
        </label>
        <button type="submit" style={{ marginTop: '10px', display: 'block' }}>
          Done
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
