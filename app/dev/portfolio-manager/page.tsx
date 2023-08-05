'use client';

import { useEffect, useState } from 'react';

type SearchResult = {
    Code: string;
    Name: string;
    Country: string;
    Exchange: string;
    Currency: string;
    Type: string;
    Isin: string | null;
}

type Security = {
    code: string;
    name: string;
    low: number;
    high: number;
    average: number;
    date: string;
    sector: string;
    industry: string;
    buy_date: string;
    buy_quantity: number;
}

type EODData = {
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    adj_close: number;
    volume: number;
};

type FundamentalData = {
    name: string;
    sector: string;
    industry: string;
};

export default function PortfolioManager() {

    //#region Search

    const [query, set_query] = useState('');
    const [results, set_results] = useState<SearchResult[]>([]);
    const [search_meta, set_search_meta] = useState<{ time: string; matches: number; }>({ time: '', matches: 0 });

    async function search() {
        await fetch(`/search-ticker?query=${query}`)
            .then(res => res.json())
            .then(data => {
                set_results(data.data);
                set_search_meta({ time: data.time, matches: data.matches });
            })
            .catch(error => {
                alert('Error searching for ticker');
                console.error(error);
            });
        }

    useEffect(() => {
        if (query.length > 0) {
            search();
        } else {
            set_results([]);
            set_search_meta({ time: '', matches: 0 });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    //#endregion

    const [securities, set_securities] = useState<Security[]>([]);
    const [portfolio_value, set_portfolio_value] = useState(0);
    const [selected_security, set_selected_security] = useState<Security | null>(null);
    const [modal_open, set_modal_open] = useState(false);

    useEffect(() => {
        set_portfolio_value(securities.reduce(
            (total, security) => total + (security.buy_quantity * security.average), 0)
        );
    }, [securities]);

    async function select_security(security: SearchResult) {

        set_selected_security(null);
        set_modal_open(true);

        const new_security: Security = {
            code: security.Code,
            name: security.Name,
            low: 0,
            high: 0,
            average: 0,
            date: '',
            sector: '',
            industry: '',
            buy_date: '',
            buy_quantity: 0
        };

        const eod_promise = fetch(`/eod-data?code=${security.Code}`);
        const fundamental_promise = fetch(`/fundamental-data?code=${security.Code}`);

        await Promise.all([eod_promise, fundamental_promise])
            .then(responses => Promise.all(responses.map(res => res.json())))
            .then(data => {

                const eod_data: EODData = data[0].data;
                const fundamental_data: FundamentalData = data[1].data;

                new_security.low = eod_data.low;
                new_security.high = eod_data.high;
                new_security.average = Number(((eod_data.low + eod_data.high) / 2).toFixed(2));
                new_security.date = eod_data.date;
                new_security.sector = fundamental_data.sector;
                new_security.industry = fundamental_data.industry;

            })
            .catch(error => {
                alert('Error fetching security data');
                console.error(error);
            });

        set_selected_security(new_security);
    }

    async function add_security() {

        if (!selected_security) {
            return;
        }

        const security = {
            code: selected_security.code,
            name: selected_security.name,
            low: selected_security.low,
            high: selected_security.high,
            average: selected_security.average,
            date: selected_security.date,
            sector: selected_security.sector,
            industry: selected_security.industry,
            buy_date: selected_security.buy_date,
            buy_quantity: selected_security.buy_quantity
        };

        set_securities([...securities, security]);
        set_selected_security(null);
        set_modal_open(false);
        set_query('');

        console.log(securities);
    }

    return (
        <main className = 'm-4'>

            <h1 className = 'text-3xl font-bold bg-zinc-800 px-8 py-14 rounded'>Portfolio Manager Prototype</h1>

                <div className = 'relative space-y-4 mt-4'>
                    <input className = 'w-1/2 p-4 rounded dark:bg-zinc-700' placeholder = 'Search' value = { query } onChange = { e => set_query(e.target.value) } />
                    <ul className = 'bg-zinc-800 absolute w-1/2 rounded max-h-96 overflow-y-auto top-24'>
                        {
                            results.length > 0 && results.map(result => {
                                return (
                                    <li className = 'p-4 border-b border-gray-200 hover:bg-zinc-900 cursor-pointer' key = { result.Code } onClick = { () => select_security(result) }>
                                        <div className = 'flex justify-between'>
                                            <div className = 'flex flex-col'>
                                                <span className = 'font-bold'>{ result.Name }</span>
                                                <span className = 'text-xs'>{ result.Code }</span>
                                            </div>
                                            <div className = 'flex flex-col text-right text-sm'>
                                                <span>{ result.Exchange }</span>
                                                <span>{ result.Type }</span>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    {
                        search_meta.matches > 0 && (
                            <div className = 'text-sm text-gray-400 absolute'>
                                <span>{ search_meta.matches } results found in { search_meta.time } - showing { results.length }</span>
                            </div>
                        )
                    }
                </div>

                {
                    modal_open && (
                        <div className = 'fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-sm' onClick = { () => set_modal_open(false) }>
                            <div className = 'bg-zinc-800 rounded p-8' onClick = { e => e.stopPropagation() }>
                                {
                                    selected_security ? (
                                        <>
                                        <div className = 'space-y-8'>

                                            <div className = 'flex justify-between gap-x-4 items-center text-2xl font-bold'>
                                                <span>{ selected_security.name }</span>
                                                <span className = 'text-zinc-300'>{ selected_security.code }</span>
                                            </div>

                                            <div className = 'flex justify-between gap-x-4 border-b pb-2'>
                                                <span className = 'text-sm'>Sector: { selected_security.sector }</span>
                                                <span className = 'text-sm'>Industry: { selected_security.industry }</span>
                                            </div>
                                            <div className = 'flex justify-between gap-x-4 p-4 bg-blue-900/50 font-mono rounded-lg text-sm'>
                                                <span className = 'text-zinc-300'>Low: { selected_security.low }</span>
                                                <span className = 'text-zinc-300'>High: { selected_security.high }</span>
                                                <span className = 'font-bold'>Average: { selected_security.average }</span>
                                                <span className = 'font-bold'>Date: { selected_security.date }</span>
                                            </div>

                                            <div className = 'flex justify-between gap-x-8'>

                                                <fieldset className = 'space-x-4'>
                                                    <label htmlFor = 'buy_date' className = 'text-sm'>Buy Date:</label>
                                                    <input type = 'date' id = 'buy_date' className = 'bg-zinc-700 px-4 py-2 rounded text-white' value = { selected_security.buy_date } onChange = { e => set_selected_security({ ...selected_security, buy_date: e.target.value }) } />
                                                </fieldset>

                                                <fieldset className = 'space-x-4'>
                                                    <label htmlFor = 'buy_quantity' className = 'text-sm'>Buy Quantity:</label>
                                                    <input type = 'number' id = 'buy_quantity' className = 'bg-zinc-700 px-4 py-2 rounded text-white' value = { selected_security.buy_quantity } onChange = { e => set_selected_security({ ...selected_security, buy_quantity: parseInt(e.target.value) }) } />
                                                </fieldset>

                                            </div>

                                        </div>

                                        <div className = 'flex justify-between items-center gap-x-4 mt-8'>
                                            <p className = 'text-sm'>
                                                Adding { selected_security.buy_quantity } share(s) of&nbsp;
                                                { selected_security.code } for { (selected_security.average * selected_security.buy_quantity).toFixed(2) }&nbsp;
                                                on { selected_security.buy_date }
                                            </p>
                                            <div className = 'space-x-4'>
                                                <button className = 'bg-zinc-600 px-4 py-2 rounded text-white' onClick = { () => set_modal_open(false) }>Cancel</button>
                                                <button className = 'bg-green-800 px-4 py-2 rounded text-white' onClick = { add_security }>Add</button>
                                            </div>
                                        </div>
                                        </>
                                    ) : (
                                        <div className = 'flex justify-center items-center w-64 aspect-video'>
                                            <svg className = 'animate-spin h-8 w-8 text-zinc-300' xmlns = 'http://www.w3.org/2000/svg' fill = 'none' viewBox = '0 0 24 24'>
                                                <circle className = 'opacity-25' cx = '12' cy = '12' r = '10' stroke = 'currentColor' strokeWidth = '4'></circle>
                                                <path className = 'opacity-75' fill = 'currentColor' d = 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z'></path>
                                            </svg>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    )
                }

                <div className = 'mt-8'>
                    <h2 className = 'text-xl font-bold'>Portfolio</h2>
                    <table className = 'w-full mt-4'>
                        <thead>
                            <tr className = 'bg-zinc-800'>
                                <th className = 'p-4 text-left'>Code</th>
                                <th className = 'p-4 text-left'>Name</th>
                                <th className = 'p-4 text-left'>Sector</th>
                                <th className = 'p-4 text-left'>Industry</th>
                                <th className = 'p-4 text-left'>Buy Date</th>
                                <th className = 'p-4 text-left'>Buy Quantity</th>
                                <th className = 'p-4 text-left'>Average</th>
                                <th className = 'p-4 text-left'>Price Date <span className = 'text-zinc-300 bg-white/10 rounded-full px-2' title = 'Date when this was the price'>&#8505;</span></th>
                                <th className = 'p-4 text-left'>Allocation</th>
                                <th className = 'p-4 text-left'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                securities.map(security => {
                                    return (
                                        <tr key = { security.code }>
                                            <td className = 'p-4'>{ security.code }</td>
                                            <td className = 'p-4'>{ security.name }</td>
                                            <td className = 'p-4'>{ security.sector }</td>
                                            <td className = 'p-4'>{ security.industry }</td>
                                            <td className = 'p-4'>{ security.buy_date }</td>
                                            <td className = 'p-4'>{ security.buy_quantity }</td>
                                            <td className = 'p-4'>{ security.average }</td>
                                            <td className = 'p-4'>{ security.date }</td>
                                            <td className = 'p-4'>{ ((security.buy_quantity * security.average) / portfolio_value * 100).toFixed(2) }%</td> 
                                            <td className = 'p-4 space-x-2'>
                                                <button className = 'bg-red-800 px-4 py-2 rounded text-white text-xs' onClick = { () => set_securities(securities.filter(s => s.code !== security.code)) }>Remove</button>
                                                <button className = 'bg-green-800 px-4 py-2 rounded text-white text-xs' onClick = { () => set_selected_security(security) }>Update</button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                                <tr className = 'bg-zinc-800'>
                                    <td colSpan = { 9 } className = 'p-4'>Total</td>
                                    <td className = 'p-4 font-bold'>{ portfolio_value }</td>
                                </tr>
                        </tbody>
                    </table>
                </div>

        </main>
    );
}