import React from 'react';
import { useNavigate } from 'react-router-dom';

type Task = {
  id: number,
  name: string,
  description: string,
  due_date: number,
  created_date: number,
}

interface TaskListProps {
  tasks: Task[],
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {

  const navigate = useNavigate();

  const handleEditClick = (taskId: number) => {
    navigate('/tasks/edit/' + taskId)
  };

  const taskStatus = (due_date: number) => {
    const now = Date.now();
    const sevenDaysInMilliseconds = 7 * 24 * 60 * 60 * 1000;
    const dueDate = new Date(due_date);

    if (dueDate.getTime() < now) {
      return "Overdue";
    } else if (dueDate.getTime() <= now + sevenDaysInMilliseconds) {
      return "Due soon";
    } else {
      return "Not urgent";
    }
  }

  return (
    <div>
      <h1>Task List</h1>
      {tasks.map((task) => {
        return (
        <div key={task.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h3>{task.name}</h3>
          <p>Description: {task.description}</p>
          <p>Due Date: {new Date(task.due_date).toLocaleDateString()}</p>
          <p>Created Date: {new Date(task.created_date).toLocaleDateString()}</p>
          <p>Status: {taskStatus(task.due_date)}</p>
          <button onClick={() => handleEditClick(task.id)}>Edit</button>
        </div>
        ) 
      })}
    </div>
  );
};

export default TaskList;
