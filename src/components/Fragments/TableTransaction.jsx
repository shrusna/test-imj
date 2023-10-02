import { useState } from "react";

const TableTransaction = (props) => {
    const { data, offset, page, address, handleOffsetChange, handlePageChange } = props
    const [filterAddress, setFilterAddress] = useState('');

    const filteredData = data.filter((transaction) => {
        const matchesFilterAddress = transaction.to.toLowerCase().includes(filterAddress.toLowerCase());
        return matchesFilterAddress;
    });

    return (
        <div className='h-screen flex flex-col px-4 items-start justify-center'>
            <div className='pb-8'>
                <div className='w-full p-2 text-center'>
                    <h1 className="text-3xl font-extrabold">{address}'s Transaction</h1>
                </div>
            </div>

            <div className="w-full overflow-x-auto shadow-md sm:rounded-lg px-6 pt-8">
                <div className="flex items-center justify-end pb-4 pt-8">
                    <div className="pb-4 bg-white">
                        <label htmlFor="table-search" className="sr-only">Search</label>
                        <div className="relative mt-1">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text" id="table-search" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Filter by to address"
                                value={filterAddress}
                                onChange={(e) => setFilterAddress(e.target.value)} />
                        </div>
                    </div>
                </div>
                <table className="w-full overflow-hidden text-sm text-left text-gray-500 shadow-md sm:rounded-lg">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Block Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Transaction Hash
                            </th>
                            <th scope="col" className="px-6 py-3">
                                From
                            </th>
                            <th scope="col" className="px-6 py-3">
                                To
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Value
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredData.map((rowData, index) => (
                            <tr key={index} className="bg-white border-b">
                                <td className="px-6 py-4">{rowData.blockNumber}</td>
                                <td className="px-6 py-4">{rowData.hash}</td>
                                <td className="px-6 py-4">{rowData.from}</td>
                                <td className="px-6 py-4">{rowData.to}</td>
                                <td className="px-6 py-4">{rowData.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='pb-4'>
                    <nav className="flex items-center justify-between pt-4" aria-label="Table navigation">
                        <div>
                            <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5" type="button">
                                {offset}
                                <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            <div id="dropdownAction" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-16">
                                <ul className="py-1 text-sm text-gray-700" aria-labelledby="dropdownActionButton">
                                    <li>
                                        <button className="block px-4 py-2 hover:bg-gray-100" onClick={() => handleOffsetChange(10)}>10</button>
                                    </li>
                                    <li>
                                        <button className="block px-4 py-2 hover:bg-gray-100" onClick={() => handleOffsetChange(25)}>25</button>
                                    </li>
                                    <li>
                                        <button className="block px-4 py-2 hover:bg-gray-100" onClick={() => handleOffsetChange(50)}>50</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <ul className="inline-flex -space-x-px text-sm h-8">
                            <li>
                                <button className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700" onClick={() => handlePageChange(page - 1)}>Previous</button>
                            </li>
                            <li>
                                <button aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">{page}</button>
                            </li>
                            <li>
                                <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700" onClick={() => handlePageChange(page + 1)}>Next</button>
                            </li>
                        </ul>
                    </nav >
                </div>
            </div>
        </div>
    )
}

export default TableTransaction