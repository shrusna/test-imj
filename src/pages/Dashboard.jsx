import { find_AllTransaction } from "../services/transaction.service";
import { useState, useEffect } from "react";
import ContentLayout from "../components/Layouts/ContentLayout";
import TableTransaction from "../components/Fragments/TableTransaction";


const DashboardPage = () => {

    const [address, setAddress] = useState("0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC");
    const [page, setPage] = useState(1);
    const [offset, setOffset] = useState(10);
    const [data, setData] = useState([]);

    const handleOffsetChange = (i) => {
        setOffset(i);
        setPage(1);
    };
    const handlePageChange = (i) => {
        setPage(i);
    };


    useEffect(() => {
        async function getData() {
            try {
                const data = await find_AllTransaction(address, page, offset)
                setData(data)
            } catch (error) {
                console.error("Error fetching transaction data: ", error)
            }
        }
        getData();
    }, [address, page, offset]);


    return (
        <>
            <ContentLayout />
            <div className="p-4 sm:ml-64">
                <TableTransaction data={data} offset={offset} page={page} handleOffsetChange={handleOffsetChange} handlePageChange={handlePageChange} address={address} />
            </div>
        </>
    )
}

export default DashboardPage;