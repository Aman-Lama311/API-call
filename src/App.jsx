import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home from './pages/Home'
import TodoList from './components/TodoList'


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
        }
      ]
    },
    
  ])
  return <RouterProvider router={router} />
}

export default App
