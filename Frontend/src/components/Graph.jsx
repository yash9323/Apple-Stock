import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoIosArrowRoundUp } from "react-icons/io";

const Graph = () => {
    return (
        <div className='m-5 mt-1 bg-neutral-900 rounded-xl p-2'>
            <div className='flex justify-between items-center'>
                <div className='ml-2'>
                    <div className='flex items-center gap-x-3 mt-2'>
                        <h1 className='text-3xl font-sans font-extrabold'>
                            Apple Inc.
                        </h1>
                        <div className='border border-l-white-600 h-5'></div>
                        <h3 className='text-lg font-sans font-light'>
                            ( AAPL )
                        </h3>
                        <FaRegStar/>
                        <button className='text-sm bg-blue-800 pl-4 pr-4 pt-1 pb-1 rounded-2xl flex items-center'><IoAddCircleOutline/>&nbsp;Watchlist</button>
                    </div>
                    <h3 className='text-xs mt-2'>NasdaqGS - NasdaqGS Real Time Price. Currency in USD</h3>
                </div>
                <div className='flex flex-col mr-2 items-end justify-end'>
                    <h1 className='text-3xl flex items-center'>
                    <IoIosArrowRoundUp color='green'/> 196.89 
                    </h1>
                    <h3 className='text-green-700'>
                        +2.41 (+1.24%)
                    </h3>
                </div>
            </div>
           <hr className='w-inherit m-2 mt-3 border-0.5 border-stone-600'/>
           <div className='flex'>
            <img src="https://static01.nyt.com/images/2024/05/02/learning/SummerTempsGraphLN2/SummerTempsGraphLN2-videoLarge-v2.png?auto=webp" alt="" srcset="" className='mt-4 ml-2 mb-5 h-2/5 w-2/4'/> 
           </div>
        </div>
    );
}

export default Graph;
