import React from 'react';
import { LuSearch } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='flex justify-between m-5 bg-neutral-900 rounded-xl p-2'>
        {/* Logo */}
        <h1 className='text-xl font-sans font-bold ml-2'>
          Unlevered
        </h1>
        {/* Search */}
        {/* Profile */}
        <div className='flex items-center mr-2'>
          <LuSearch size={20} className='mr-4'/>
          <FaRegUserCircle size={20}/>
        </div>
    </div>
  );
}

export default Navbar;
