import React from 'react';
import user1 from './../../assets/user1.png';
import user2 from './../../assets/user2.png';
import user3 from './../../assets/user3.png';
import user4 from './../../assets/user4.png';
import user5 from './../../assets/user5.png';
import user6 from './../../assets/user6.png';
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="text-center p-32 bg-[url('./../src/assets/bg.png')] bg-cover h-svh relative">
      <div>
        <div className='text-white'>
          <h1 className='text-4xl font-semibold mb-3'>Find Your Dream Property, Fast and Easy</h1>
          <p>Find your dream property effortlessly with AblajHomes - your ultimate real estate platform</p>
          <p>Discover exclusive listings, take virtual tours, and enjoy smooth transactions - all in</p>
          <p>one place.</p>
        </div>
        <div className='mt-16'>
          <div className='flex justify-start'>
            <div className=' px-6 py-1 bg-white rounded-tl-md'>Buy</div>
            <div className=' px-6 py-1 bg-blue-500'>Rent</div>
            <div className=' px-6 py-1 bg-blue-500 rounded-tr-md'>Sell</div>
          </div>
          <div className='grid grid-cols-4 text-start py-4 bg-white font-sans'>
            <div className='border-r-gray-300 border-r-2 pl-4'>
              <h3>Property Type</h3>
              <div className='flex items-center gap-4'>
                <p>Select Property Type</p>
                <FaAngleDown/>
              </div>
              
            </div>
            <div className='border-r-gray-300 border-r-2 pl-4'>
              <h3>Location</h3>
              <p>e.g Lagos Nigeria</p>
            </div>
            <div className='border-r-gray-300 border-r-2 pl-4'>
              <h3>Price</h3>
              <p>Min. Price - Max. Price </p>
            </div>
            <div className='pl-4 flex justify-center items-center'>
              <div className='flex justify-center items-center bg-blue-800 w-2/3 p-3 rounded-lg'>
                <CiSearch className='w-8 mr-1 text-white'/>
                <input type="text" className='w-full bg-transparent outline-none placeholder-white font-semibold' placeholder='Search'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='sk rounded-tl-full z-10 absolute w-2/4 bg-white h-20 bottom-0 right-0 flex'>
        <div className='ml-24 mt-4 mr-4 flex bg-white shadow-slate-400 shadow-md top-6 p-2 justify-center items-center rounded-full'>
          <div className=' flex justify-around items-center'>
            <div className='relative flex w-40 h-10'>
              <img src={user1} alt="" className='absolute left-0 top-1'/>
              <img src={user2} alt="" className='absolute left-5 top-1'/>
              <img src={user3} alt="" className='absolute left-10 top-1'/>
              <img src={user4} alt="" className='absolute left-14 top-1'/>
              <img src={user5} alt="" className='absolute left-20 top-1'/>
              <img src={user6} alt="" className='absolute left-24 top-1'/>
            </div>
          </div>
          <div className='font-semibold text-start'> 
            <p>72K+ Happy</p>
            <p>Customer</p>
          </div>
        </div>
        <div className=' flex mt-4 bg-white shadow-slate-400 shadow-md justify-around items-center rounded-full p-4'>
          <div className=' flex justify-around items-center'>
            <div className='mr-4'>
              <img src={user1} alt="" className=' '/>
            </div>
          </div>
          <div className='font-semibold text-start'>
            <p>200K+ New</p>
            <p>Listing Everyday!</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
