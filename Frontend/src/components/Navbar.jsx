import React from 'react';
import { LuSearch } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsGraphUpArrow } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center m-5 mb-2 bg-neutral-900 rounded-xl p-2'>
        {/* Logo */}
        <div className='flex items-center'>
          <BsGraphUpArrow/>
          <h1 className='text-xl font-sans font-bold ml-2'>
            Unlevered
          </h1>
        </div>
        {/* Search */}
        <div className='flex items-center border border-stone-600 rounded-2xl pr-2'>
          <input type="text" placeholder='Search Here' className='bg-transparent text-white text-sm p-2 w-80'></input>
          <LuSearch className='ml-2 mr-2'/>
        </div>
        {/* Profile */}
        <div className='flex items-center mr-2'>
          <IoMdNotificationsOutline size={20} className='mr-3'/>
          <FaRegUserCircle size={20}/>
        </div>
    </div>
  );
}

export default Navbar;
