import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './pages/Home';
import TodoList from './components/TodoList';
import ProductDetails from './components/ProductDetails';

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
        }
      ]
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
