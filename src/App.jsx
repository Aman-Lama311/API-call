import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import TodoList from './components/TodoList';
import ProductDetails from './components/ProductDetails';
import Todo from './components/Todo';
import Home from './pages/Home';



const App = () => {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'todos',
          element: <TodoList />
        },
        {
          path: 'product/:productId', 
          element: <ProductDetails />
        },
        {
          path: 'todo', 
          element: <Todo />
        }
      ]
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
