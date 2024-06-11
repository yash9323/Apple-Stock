import React from 'react';
import { useState,useEffect } from 'react';
import data from "../data/dummy"
import Rstats from './Rstats';
import Astats from './Astats';

const Stats = () => {
  const [currentView, setCurrentView] = useState(1);
  const [dummy,SetData] = useState(data)

  const handleClick = (view) => (event) => {
    event.preventDefault();
    setCurrentView(view);
  };

  const renderView = () => {
    switch (currentView) {
      case 1:
        return (
          <>
           <Rstats data={dummy}/>
          </>
        );
      case 2:
        return (
          <>
            <Astats data={dummy}/>
          </>
        );
      case 3:
        return (
          <>
            <Rstats data={dummy}/>
          </>
        );
      case 4:
        return (
          <>
            <Rstats data={dummy}/>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className='bg-neutral-900 rounded-xl p-2'>
      <div className='flex text-sm gap-x-3 rounded-xl p-2 w-1/2'>
        <button onClick={handleClick(1)} 
        className={`
            ${currentView === 1 ? 'bg-gray-800 rounded-xl p-2' : 'rounded-xl p-2'}
          `}>
            Key Ratios
        </button>
        {/* <div className='mt-1 border border-l-white-600 h-inherit'></div> */}
        <button onClick={handleClick(2)}
        className={`
            ${currentView === 2 ? 'bg-gray-800 rounded-xl p-2' : 'rounded-xl p-2'}
          `}>
            Analyst estimates
            </button>
        {/* <div className='mt-1 border border-l-white-600 h-inherit'></div> */}
        <button onClick={handleClick(3)}
        className={`
            ${currentView === 3 ? 'bg-gray-800 rounded-xl p-2' : 'rounded-xl p-2'}
          `}>
        Data
        </button>
        <button onClick={handleClick(4)}
        className={`
            ${currentView === 4 ? 'bg-gray-800 rounded-xl p-2' : 'rounded-xl p-2'}
          `}>
        Statistics
        </button>
      </div>
      <div>{renderView()}</div>
    </div>
  );
};

export default Stats;
