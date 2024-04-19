import React, { ChangeEvent, FormEvent, useState } from 'react';

export interface TaskInput {
  id?: number;
  name: string;
  description: string;
  due_date?: string;
}

interface TaskFormProps {
  handleFormSubmit: (taskInput: TaskInput) => void;
  task?: TaskInput;
}

const TaskForm: React.FC<TaskFormProps> = ({ handleFormSubmit, task }) => {
  const initialTaskInput: TaskInput = task
    ? task
    : {
        name: '',
        description: '',
      };

  const [taskInput, setTaskInput] = useState<TaskInput>(initialTaskInput);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTaskInput((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, description, due_date } = taskInput;
    if (name.trim().length === 0 || description.trim().length === 0 || !due_date) {
      alert('Name, description and due date are required');
      return;
    }

    handleFormSubmit(taskInput);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter name"
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
            placeholder="Enter description"
            value={taskInput.description}
            onChange={handleChange}
            style={{ marginLeft: '10px', verticalAlign: 'top' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="due_date">Due Date:</label>
          <input
            type="date"
            id="due_date"
            name="due_date"
            value={taskInput.due_date}
            onChange={handleChange}
          />
        </div>
        <button type="submit" style={{ marginTop: '10px', display: 'block' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
