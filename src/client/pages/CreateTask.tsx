import { Link, useNavigate } from 'react-router-dom'
import TaskForm, { TaskInput } from '../components/TaskForm'

const CreateTask = () => {

  const navigate = useNavigate();

  const handleTaskFormSubmit = async (taskInput: TaskInput) => {
    await fetch('/tasks/create', {
      method: 'POST',
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
      <h1>Create Task</h1>
      <TaskForm handleFormSubmit={handleTaskFormSubmit} />
    </div>
  )
}

export default CreateTask