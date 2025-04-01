import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between bg-black text-white px-8 py-5 items-center'>
      <h1 className='text-3xl font-semibold'>API</h1>
      <nav className='space-x-6'>
        <NavLink className={(e) => e.isActive? 'text-purple-500': ''} to='/'>Products</NavLink>
        <NavLink className={(e) => e.isActive? 'text-purple-500': ''} to='todos'>TodoList</NavLink>
      </nav>
    </div>
  )
}

export default Header
