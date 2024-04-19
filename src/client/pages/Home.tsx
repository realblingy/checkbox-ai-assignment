import { useEffect, useState } from 'react';
import TaskList from '../components/TaskList';
import { Task } from '../../server/models/Task';
import { Link } from 'react-router-dom';

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('/tasks');
      const taskData = await response.json();
      setTasks(taskData);
    })();
  }, []);

  return (
    <div>
      <input placeholder='Search' />
      <Link to={'/tasks/create'}>
        <button>Create Task +</button>
      </Link>
      {tasks.length === 0 ? (<p>No tasks here :(</p>)
        :
      <TaskList tasks={tasks} />}
      
    </div>
  )
}

export default Home