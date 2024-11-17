import React from 'react'

const Button = () => {
  return (
    <div className='flex items-center'>
      <button className='ml-4 px-4 py-1 border-blue-500 border rounded-lg'>sign in</button>
      <button className='ml-4 px-4 py-1 border-blue-500 border rounded-lg text-white bg-blue-600'>sign up</button>
    </div>
  )
}

export default Button
