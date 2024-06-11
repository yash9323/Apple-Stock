import React from 'react';

const Rstats = ({data}) => {
    return (
        <div>
            <div className="mt-2 stats-card bg-gray-800 text-white rounded-lg p-4 grid grid-cols-4 gap-4">
                <div className="stat">
                    <p className="text-sm text-gray-400">P/B Ratio</p>
                    <h2 className="text-xs font-semibold">{data.pb_ratio}</h2>
                </div>
                <div className="stat">
                    <p className="text-sm text-gray-400">P/E Ratio</p>
                    <h2 className="text-xs font-semibold">{data.pe_ratio}</h2>
                </div>
                <div className="stat">
                    <p className="text-sm text-gray-400">PEG Ratio</p>
                    <h2 className="text-xs font-semibold">{data.peg_ratio}</h2>
                </div>
                <div className="stat">
                    <p className="text-sm text-gray-400">P/S Ratio</p>
                    <h2 className="text-xs font-semibold">{data.ps_ratio}</h2>
                </div>
                <div className="stat">
                    <p className="text-sm text-gray-400">Outstanding</p>
                    <h2 className="text-xs font-semibold">{data.shares_outstanding}M</h2>
                </div>
                <div className="stat">
                    <p className="text-sm text-gray-400">Debt to Equity Ratio</p>
                    <h2 className="text-xs font-semibold">{data.debt_to_equity_ratio}</h2>
                </div>
                <div className="stat">
                    <p className="text-sm text-gray-400">Current Ratio</p>
                    <h2 className="text-xs font-semibold">{data.current_ratio}</h2>
                </div>
                <div className="stat">
                    <p className="text-sm text-gray-400">Market Cap</p>
                    <h2 className="text-xs font-semibold">{data.market_ap}M</h2>
                </div>
            </div>
        </div>
    );
}

export default Rstats;