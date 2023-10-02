import React, { useState } from 'react';

const FormByHash = ({ onFormSubmit }) => {
    const [txHash, setTxHash] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(txHash);
    };
    return (
        <form onSubmit={handleSubmit} className='w-full p-2 text-center pb-16'>
            <div className="mb-6">
                <input value={txHash} onChange={(e) => setTxHash(e.target.value)} placeholder='Input Address' type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500" />

            </div>
            <div className='px-16'>
                <button type="submit" className="w-full py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center" > Get Transaction</button >
            </div>
        </form>
    )
}

export default FormByHash;