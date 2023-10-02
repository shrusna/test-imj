const CardTransaction = ({ transactionData }) => {
    const {
        accessList,
        blockHash,
        blockNumber,
        chainId,
        from,
        gas,
        gasPrice,
        hash,
        input,
        maxFeePerGas,
        maxPriorityFeePerGas,
        nonce,
        r,
        s,
        to,
        transactionIndex,
        type,
        v,
        value,
    } = transactionData;

    return (
        <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Transaction Details: <span>{hash}</span>
            </h5>
            <div className="grid grid-rows-4 grid-cols-2 gap-2 pt-4">
                <div className="max-w-md whitespace-normal break-all"><b>Block Hash:</b><br />{blockHash}</div>
                <div className="max-w-md whitespace-normal break-all"><b>Block Number:</b><br />{blockNumber}</div>
                <div className="max-w-md whitespace-normal break-all"><b>From:</b><br />{from}</div>
                <div className="max-w-md whitespace-normal break-all"><b>Gas:</b><br />{gas}</div>
                <div className="max-w-md whitespace-normal break-all"><b>Gas Price:</b><br />{gasPrice}</div>
                <div className="max-w-md whitespace-normal break-all"><b>Max Fee Per Gas:</b><br />{maxFeePerGas}</div>
                <div className="max-w-md whitespace-normal break-all"><b>Max Priority Fee Per Gas:</b><br />{maxPriorityFeePerGas}</div>
                <div className="max-w-md whitespace-normal break-all"><b>Input:</b><br />{input}</div>
                <div className="max-w-md whitespace-normal break-all"><b>Nonce:</b><br />{nonce}</div>
                <div className="max-w-md whitespace-normal break-all"><b>To:</b><br />{to}</div>
                <div className="max-w-md whitespace-normal break-all"><b>Transaction Index:</b><br />{transactionIndex}</div>
                <div className="max-w-md whitespace-normal break-all"><b>Value:</b><br />{value}</div>
                <div className="max-w-md whitespace-normal break-all"><b>Type:</b><br />{type}</div>
                <div className="max-w-md whitespace-normal break-all"><b>Access List:</b><br />{JSON.stringify(accessList)}</div>
                <div className="max-w-md whitespace-normal break-all"><b>Chain Id:</b><br />{chainId}</div>
                <div className="max-w-md whitespace-normal break-all"><b>V:</b><br />{v}</div>
                <div className="max-w-md whitespace-normal break-all"><b>R:</b><br />{r}</div>
                <div className="max-w-md whitespace-normal break-all"><b>S:</b><br />{s}</div>
            </div>

        </div>
    );
};

export default CardTransaction;
