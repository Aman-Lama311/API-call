import { Button } from '@material-tailwind/react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTask } from '../features/taskSlice';

const ShowTask = () => {
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();
  console.log(tasks)
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}
        className='flex justify-between items-center p-5 shadow-lg rounded-xl'>
          <div>
          <h2>{task.title}</h2>
          <h3 className='text-lg font-semibold'>{task.author}</h3>
          <span className='text-xs text-gray-700'>{task.categories.map((category) => category).join(', ')}
          <p>{task.detail}</p>
          </span>
          </div>
          <Button onClick={() => dispatch(removeTask(task.id))}>Remove</Button>
        </div>
      ))}
    </div>
  )
}

export default ShowTask
