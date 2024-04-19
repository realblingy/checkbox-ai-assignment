import { ChangeEvent, useEffect, useState } from 'react';
import TaskList from '../components/TaskList';
import { Task } from '../../server/models/Task';
import { Link } from 'react-router-dom';

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('/tasks');
      const taskData = await response.json();
      setTasks(taskData);
      setFilteredTasks(taskData); // Initialize filtered tasks with all tasks
    };

    fetchTasks();
  }, []);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.trim().toLowerCase();

    if (searchValue.length === 0) {
      setFilteredTasks(tasks); // Reset filtered tasks when search input is empty
    } else {
      const filtered = tasks.filter(task =>
        task.name.toLowerCase().includes(searchValue)
      );
      setFilteredTasks(filtered); // Update filtered tasks based on search input
    }
  };

  return (
    <div>
      <input placeholder='Search' onChange={handleSearchChange} />
      <Link to={'/tasks/create'}>
        <button>Create Task +</button>
      </Link>
      {filteredTasks.length === 0 ? (
        <p>No tasks here :(</p>
      ) : (
        <TaskList tasks={filteredTasks} />
      )}
    </div>
  );
};

export default Home;
