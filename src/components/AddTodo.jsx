import { Button, Checkbox, Input, Textarea, Typography } from '@material-tailwind/react'
import { Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { addTask } from '../features/taskSlice'

const taskSchema = Yup.object({
  title: Yup.string().max(25).required('Title is required'),
  author: Yup.string().max(25).required('Author is required'),
  categories: Yup.array().min(1,'At least one Category is required'),
  detail: Yup.string().max(500).min(10).required('Detail is required')
})

const AddTodo = () => {

  const dispatch = useDispatch();


  return (
    <div>
     <Formik 
     initialValues={{
      title: '',
      author: '',
      categories: [],
      detail: ''
     }}
     onSubmit={(values, {resetForm}) => {
         dispatch(addTask(values));
         resetForm();
      }}
     validationSchema={taskSchema}
     >
      {({values, handleChange, handleSubmit, touched, errors}) => {
        return <form onSubmit={handleSubmit}
        className='max-w-[500px] space-y-3'>
          <div>
            <Input 
            name='title'
            label='Title'
            value={values.title}
            onChange={handleChange}
            />
            {touched.title && errors.title && <p className='text-red-400 text-sm'>{errors.title}</p>}
          </div>
          <div>
            <Input 
            name='author'
            label='Author'
            value={values.author}
            onChange={handleChange}
            />
            {touched.author && errors.author && <p className='text-red-400 text-sm'>{errors.author}</p>}
          </div>
          <div>
            <Typography variant='h6'>Select Categories</Typography>
              <Checkbox
              name='categories'
              label='Health'
              value={'Health'}
              onChange={handleChange}
              /> 
              <Checkbox
              name='categories'
              label='Business'
              value={'Business'}
              onChange={handleChange}
              /> 
              <Checkbox
              name='categories'
              label='Education'
              value={'Education'}
              onChange={handleChange}
              /> 
          {touched.categories && errors.categories && <p className='text-red-400 text-sm'>{errors.categories}</p>}
          </div>
          <div>
            <Textarea
            name='detail'
            label='Detail'
            value={values.detail}
            onChange={handleChange}
            />
            {touched.detail && errors.detail && <p className='text-red-400 text-sm'>{errors.detail}</p>}
          </div>
          <Button type='submit'>Add Task</Button>

        </form>
      } }
     </Formik>
    </div>
  )
}

export default AddTodo
