import React from 'react';

const Astats = ({data}) => {
    return (
        <div>
           <div className="mt-2 stats-card bg-gray-800 text-white rounded-lg p-4 grid grid-cols-4 gap-4">
                <div className="stat">
                    <p className="text-sm text-gray-400">Citi Bank</p>
                    <h2 className="text-xs font-semibold">{data.analyst_estimates.Citibank}</h2>
                </div>
                <div className="stat">
                    <p className="text-sm text-gray-400">Goldman Sachs</p>
                    <h2 className="text-xs font-semibold">{data.analyst_estimates.GoldmanSachs}</h2>
                </div>
                <div className="stat">
                    <p className="text-sm text-gray-400">J.P. Morgan</p>
                    <h2 className="text-xs font-semibold">{data.analyst_estimates.MorganStanley}</h2>
                </div>
                <div className="stat">
                    <p className="text-sm text-gray-400">Morgan Stanley</p>
                    <h2 className="text-xs font-semibold">{data.analyst_estimates.MorganStanley}</h2>
                </div>
            </div> 
        </div>
    );
}

export default Astats;