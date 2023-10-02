
import { useEffect, useState } from 'react'
import { find_LatestBitcoin } from '../../services/transaction.service';

export default function BitcoinPrice() {
    const [bitcoin, setBitcoin] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await find_LatestBitcoin()
                const split = data.toFixed(3);
                setBitcoin(split)
            } catch (error) {
                console.error("Error fetching transaction data: ", error)
            }
        }
        getData();
    }, []);

    return (
        <div className='h-screen flex flex-col px-96 items-start justify-center'>
            <div className='w-full p-2 text-center'>
                <h1 className="text-5xl font-extrabold pb-4">Bitcoin Price</h1>
                <h1 className="text-3xl">$ {bitcoin}</h1>
            </div>
        </div>
    )
}