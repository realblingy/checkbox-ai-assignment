import { RouterProvider, createBrowserRouter, } from 'react-router-dom';
import Home from './pages/Home';
import CreateTask from './pages/CreateTask';
import EditTask from './pages/EditTask';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/tasks",
      children: [
        {
          path: "create",
          element: <CreateTask />
        },
        {
          path: "edit/:id",
          element: <EditTask />
        }
      ]
    },
  ])

  return (
    <RouterProvider router={router} />
  );
};

export { App };
