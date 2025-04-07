import { Button, Checkbox, Input, Option, Radio, Select, Textarea, Typography } from '@material-tailwind/react'
import { Formik } from 'formik'
import React from 'react'

export default function AddTodo() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>

      <Formik
        initialValues={{
          email: '',
          password: ''
        }}

        onSubmit={(val) => {
          console.log(val);

        }}

      >


        {({ handleChange, handleSubmit, values}) => {

          return <form
            onSubmit={handleSubmit}
            className='max-w-[500px] space-y-4'>
            <div className='flex justify-center'>
              <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT-YS30TRdlNNPsScis_Tu1CKgwPVfdVXcVzuQ0JFiDZbZk90iT" className='w-40' alt="" />
            </div>

            <div className='text-center'>
              <h1 className='text-3xl font-bold'>Sign in to your account</h1>
              <p className='text-lg'>Or <span className='text-[#6B62B2]'>Stat your 14-days free trail</span> </p>
            </div>

            <div className='p-4 shadow-2xl space-y-4 rounded-md'>
              <div>
                <Input
                  label='Email address'
                  name='email'
                  type='email'
                  onChange={handleChange}
                  value={values.email}
                  required
                />
              </div>
              <div>
                <Input
                  label='Password'
                  name='password'
                  type='password'
                  onChange={handleChange}
                  value={values.password}
                  required
                />
              </div>
            </div>


          </form>
        }}


      </Formik>



    </div>
  )
}