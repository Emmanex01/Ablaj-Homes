import React from 'react'
import Button from './Button'

const NavBar = () => {
  return (
    <div className='flex w-2/4'>
      <ul className='flex items-center'>
        <li className='ml-4 cursor-pointer'>
            About us
        </li>
        <li className='ml-4 relative hover:text-blue-600 group cursor-pointer'>
          <span>
              Properties
          </span>
          <div className='absolute z-50 bg-white p-4 -bottom-50 w-40 hidden group-hover:block'>
            <ul>
                <li>Self contained</li>
                <li>Mini Flat</li>
                <li>Semi detached</li>
            </ul>
          </div>
        </li>
        <li className='ml-4 relative hover:text-blue-600 group cursor-pointer'>
          <span>
              Contact us
          </span>
          <div className='absolute z-50 bg-white p-4 -bottom-50 w-40 hidden group-hover:block'>
            <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Discord</li>
                <li>Email</li>
                <li>Whatsapp</li>
            </ul>
          </div>
        </li>
        <li className='ml-4 relative hover:text-blue-600 group cursor-pointer'>
          <span>
              Career & Blog
          </span>
          <div className='absolute z-50 bg-white p-4 -bottom-50 w-40 hidden group-hover:block'>
            <ul>
                <li>Career</li>
                <li>Blog</li>
            </ul>
          </div>
        </li>
      </ul>
      <Button/>
    </div>
  )
}

export default NavBar
