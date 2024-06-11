import React from 'react';
import data from "../data/dummy"
import { useState } from "react"
import { CiShare1 } from "react-icons/ci";

const News = ({}) => {
    const [dummy,SetData] = useState(Object.values(data.news));
    const [currentView, setCurrentView] = useState(1);
    const handleClick = (view) => (event) => {
        event.preventDefault();
        setCurrentView(view);
      };
      const renderView = () => {
        switch (currentView) {
          case 1:
            return (
              <>
               {dummy.filter((item, index) => index < 3).map((filteredItem, index) => (
                <div key={filteredItem.id || index}>
                    <div className='flex justify-between items-center mr-3'>
                        <h4 className='font-bold text-lg'>Article {index + 1}</h4>
                        <CiShare1/>
                    </div>
                    <p className='text-xs'>{filteredItem.summary}</p>
                </div>
            ))}
              </>
            );
          case 2:
            return (
              <>
                {dummy.filter((item, index) => index < 2).map((filteredItem, index) => (
                <div key={filteredItem.id || index}>
                <div className='flex justify-between items-center'>
                    <h4 className='font-bold text-lg'>Article {index + 1}</h4>
                    <CiShare1/>
                </div>
                <p className='text-xs'>{filteredItem.summary}</p>
                </div>
            ))}
              </>
            );
          case 3:
            return (
              <>
                {dummy.map((item,index) => 
                <div>
                    <div className='flex justify-between items-center'>
                        <h4 className='font-bold text-lg'>
                            Aritcle {index+1}
                        </h4>
                        <CiShare1/>
                    </div>
                    <p className='text-xs'>
                        {item.summary}
                    </p>
                </div>
            )}
              </>
            );
          default:
            return null;
        }
      };
    return (
        <div className='bg-neutral-900 rounded-xl p-2 w-2/4'>
            <h4 className='text-lg font-bold text-center'>News for Apple Inc.</h4>
            <div className='flex text-sm gap-x-3 rounded-xl p-2 w-1/2'>
                <button onClick={handleClick(1)} 
                className={`
                    ${currentView === 1 ? 'bg-gray-800 rounded-xl p-2' : 'rounded-xl p-2'}
                `}>
                    Latest
                </button>
                {/* <div className='mt-1 border border-l-white-600 h-inherit'></div> */}
                <button onClick={handleClick(2)}
                className={`
                    ${currentView === 2 ? 'bg-gray-800 rounded-xl p-2' : 'rounded-xl p-2'}
                `}>
                    Earnings
                    </button>
                {/* <div className='mt-1 border border-l-white-600 h-inherit'></div> */}
                <button onClick={handleClick(3)}
                className={`
                    ${currentView === 3 ? 'bg-gray-800 rounded-xl p-2' : 'rounded-xl p-2'}
                `}>
                Other News
                </button>
            </div>
            <div className='flex flex-col gap-y-2 mt-2'>
                {renderView()}
            </div>
    </div>
    );
}

export default News;
