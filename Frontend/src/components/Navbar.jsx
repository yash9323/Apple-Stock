import React from 'react';
import { LuSearch } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsGraphUpArrow } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-neutral-900 rounded-xl p-2'>
        {/* Logo */}
        <div className='flex items-center'>
          <h1 className='text-xl font-sans font-bold ml-2 mr-2'>
            Unlevered
          </h1>
          {/* <BsGraphUpArrow/> */}
        </div>
        {/* Search */}
        <div class="flex items-center border border-stone-600 rounded-2xl pr-2 max-sm:hidden">
          <input type="text" placeholder="Search Here" class="bg-transparent text-white text-sm p-2 w-80" />
          <LuSearch class="ml-2 mr-2" />
        </div>
        {/* Profile */}
        <div className='flex items-center mr-2'>
          <LuSearch size={20} class="mr-3 sm:invisible" />
          <IoMdNotificationsOutline size={20} className='mr-3'/>
          <FaRegUserCircle size={20}/>
        </div>
    </div>
  );
}

export default Navbar;
