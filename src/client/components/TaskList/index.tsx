import React from 'react';

type Task = {
  id: number,
  name: string,
  description: string,
  due_date: number,
  created_date: number,
}

interface TaskListProps {
  tasks: Task[],
  setEditingTask: Function
}

const TaskList: React.FC<TaskListProps> = ({ tasks, setEditingTask }) => {
  const today = new Date();

//   const isDueSoon = (dueDate) => {
//     const dueDateObj = new Date(dueDate);
//     const diffTime = dueDateObj - today;
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//     return diffDays <= 7 && diffDays >= 0;
//   };

//   const isOverdue = (dueDate) => {
//     const dueDateObj = new Date(dueDate);
//     return dueDateObj < today;
//   };

  return (
    <div>
      <h2>Task List</h2>
      {tasks.map((task) => (
        <div key={task.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h3>{task.name}</h3>
          <p>Description: {task.description}</p>
          <button onClick={() => setEditingTask(task.id)}>Edit</button>
          {/* <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p> */}
          {/* <p>Created Date: {new Date(task.createDate).toLocaleDateString()}</p> */}
          {/* <p>Status: {task.status}</p> */}
          {/* <p>{task.urgent ? 'Not Urgent' : 'Urgent'}</p> */}
          {/* {isDueSoon(task.dueDate) && <p style={{ color: 'orange' }}>Due Soon</p>} */}
          {/* {isOverdue(task.dueDate) && <p style={{ color: 'red' }}>Overdue</p>} */}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
