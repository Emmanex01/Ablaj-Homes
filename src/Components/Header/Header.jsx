import React from 'react';
import NavBar from './NavBar';
import Logo from './Logo';

const Header = () => {
  return (
    <div className='flex justify-between bg-white font-semibold pt-2 pb-2'>
      <Logo/>
      <NavBar/>
    </div>
  )
}

export default Header
