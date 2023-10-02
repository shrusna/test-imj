
import axios from "axios";
const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
const BIT_API_KEY = import.meta.env.VITE_REACT_APP_BIT_API_KEY

export async function find_AllTransaction(address, page, offset) {
    try {
        const response = await axios.get(API_URL, {
            params: {
                module: "account",
                action: "txlist",
                address: address,
                startblock: 0,
                endblock: 99999999,
                page: page,
                offset: offset,
                sort: "asc",
                apikey: API_KEY
            }
        });

        if (response.data && response.data.status === "1") {
            return response.data.result;
        } else {
            throw new Error("Error fetching transaction data");
        }
    } catch (error) {
        console.error("Error fetching transaction data: ", error);
        throw error;
    }
}

export async function find_OneTransactionHash(txhash) {
    try {
        const response = await axios.get(API_URL, {
            params: {
                module: 'proxy',
                action: 'eth_getTransactionByHash',
                txhash: txhash,
                apikey: API_KEY
            }
        });

        if (response.data != null) {
            return response.data.result;
        } else {
            throw new Error("Error fetching transaction data");
        }
    } catch (error) {
        console.error("Error fetching transaction data: ", error);
        throw error;
    }

}

export async function find_LatestBitcoin() {
    try {

        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
            headers: {
                'X-CMC_PRO_API_KEY': BIT_API_KEY,
            },
            params: {
                start: '1',
                limit: '1',
                convert: 'USD',
            },
        });

        if (response.data != null) {
            return response.data.data[0].quote.USD.price;
        } else {
            throw new Error("Error fetching transaction data");
        }
    } catch (error) {
        console.error('Error fetching details:', error);
    }
}


