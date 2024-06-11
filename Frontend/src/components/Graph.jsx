import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import News from './News';
import Chart from './Chart';


const Graph = () => {
    const d = new Date()
    return (
        <div className='bg-neutral-900 rounded-xl p-2'>
            <div className='flex justify-between items-center max-md:flex-col'>
                <div className='ml-2'>
                    <div className='flex items-center gap-x-3 mt-2'>
                        <h1 className='text-3xl font-sans font-extrabold text-nowrap'>
                            Apple Inc.
                        </h1>
                        <div className='border border-l-white-600 h-5'></div>
                        <h3 className='text-lg font-sans font-light text-nowrap'>
                            ( AAPL )
                        </h3>
                        <FaRegStar/>
                        <IoMdNotificationsOutline/>
                        <IoAddCircleOutline/>
                        {/* <button className='text-sm bg-blue-800 pl-4 pr-4 pt-1 pb-1 rounded-2xl flex items-center max-sm:invisible'>&nbsp;Watchlist</button> */}
                    </div>
                    <h3 className='text-xs mt-2 font-extrabold max-md:text-center'>Technology . Consumer Electronics . Usa</h3>
                    <h3 className='text-xs mt-2 max-md:text-center'>NasdaqGS - NasdaqGS Real Time Price. Currency in USD</h3>
                </div>
                <div className='flex flex-col mr-2 items-end justify-end max-md:mt-2'>
                    <h1 className='text-3xl flex items-center font-bold'>
                    <IoIosArrowRoundUp color='green'/> 196.89 
                    </h1>
                    <h3 className='text-green-700 font-bold'>
                        +2.41 (+1.24%)
                    </h3>
                    <h3 className='text-xs mt-1 text-gray-400 font-extralight'>{d.toUTCString().slice(0,17)}</h3>
                </div>
            </div>
           <hr className='w-inherit m-2 mt-3 border-0.5 border-stone-600'/>
           <div className='flex justify-between gap-x-4 max-md:flex-col'>
            <Chart/>
            <News/>
           </div>
        </div>
    );
}

export default Graph;
