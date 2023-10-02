import { find_OneTransactionHash } from "../services/transaction.service";
import { useState, useEffect } from "react";
import ContentLayout from "../components/Layouts/ContentLayout";
import FormByHash from "../components/Fragments/FormTransaction";
import CardTransaction from "../components/Fragments/CardTransactionDetails";


const TransactionByHashPage = () => {
    const [txHash, setTxHash] = useState('');
    const [transactionData, setTransactionData] = useState(null);

    const handleSubmit = async (txHash) => {
        setTxHash(txHash);
        try {
            const data = await find_OneTransactionHash(txHash);
            setTransactionData(data);
        } catch (error) {
            console.error("Error fetching transaction data: ", error);
        }
    };


    return (
        <>
            <ContentLayout />
            <div className="p-4 sm:ml-64">
                <div className='h-screen flex flex-col px-96 items-start justify-center'>
                    <FormByHash onFormSubmit={handleSubmit} />
                    {transactionData && <CardTransaction transactionData={transactionData} />}
                </div>
            </div>
        </>
    )
}
export default TransactionByHashPage;