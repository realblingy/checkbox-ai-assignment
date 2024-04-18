import React, { ChangeEvent, FormEvent, useState } from 'react';

export interface TaskInput {
  id?: number;
  name: string;
  description: string;
  due_date: number;
}

interface TaskFormProps {
  handleFormSubmit: (taskInput: TaskInput) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ handleFormSubmit }) => {
  const [taskInput, setTaskInput] = useState<TaskInput>({
    name: '',
    description: '',
    due_date: 230034,
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
        {/* Due Date input (if needed) */}
        {/* <label>
          Due Date:
          <input type="date" name="due_date" value={taskInput.due_date} onChange={handleChange} />
        </label> */}
        <button type="submit" style={{ marginTop: '10px' }}>
          Create
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
