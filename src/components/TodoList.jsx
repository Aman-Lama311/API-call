import React from 'react'
import AddTodo from './AddTodo'
import ShowTask from './ShowTask'

const TodoList = () => {
  return (
    <div className='min-h-screen bg-gray-200'>
     <h1 className='text-3xl font-bold text-center py-10'>Redux Toolkit Task Manager</h1>
      <div className='flex justify-center'>
       <div className='flex flex-col md:flex-row gap-10 px-5 sm:px-10'>
        <AddTodo />
      <ShowTask />
      </div>
    </div>
    </div>
  )
}

export default TodoList
