import { RouterProvider, createBrowserRouter, } from 'react-router-dom';
import Home from './pages/Home';
import CreateTask from './pages/CreateTask';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/create_task",
      element: <CreateTask />
    }
  ])

  return (
    <RouterProvider router={router} />
  );
};

export { App };
