import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import TaskForm, { TaskInput } from '../components/TaskForm';

const EditTask = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [task, setTask] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await fetch('/tasks/' + params.id);
        const taskData = await response.json();
        setTask(taskData);
      })();
    }, [params])

    const handleTaskFormSubmit = async (taskInput: TaskInput) => {
      await fetch('/tasks/update/' + params.id, {
        method: 'PUT',
        body: JSON.stringify(taskInput),
        headers: {
          'Content-Type': 'application/json'
        },
      });
      navigate('/');
    }
  
    return (
      <div style={{ flexDirection: 'column' }}>
        <Link to='/'>
          <button>Back Home</button>
        </Link>
        <h1>Edit Task</h1>
        {task && <TaskForm task={task} handleFormSubmit={handleTaskFormSubmit} />}
      </div>
    )
}

export default EditTask