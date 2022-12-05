import React, { useEffect, useState } from 'react';
import { axiosRequest } from '../../api';
import Header from '../../components/Header/Header';
import { BUY_ORDERS_URL } from '../../utils/constants';
import BuyOrderList from './components/BuyOrderList';

const BuyOrders = ({ selectedCountries }) => {
    const [buyOrders, updateBuyOrders] = useState([]);

    useEffect(() => {
        fetchDataSets();
    }, []);

    const fetchDataSets = async () => {
        const response = await axiosRequest({ url: BUY_ORDERS_URL, method: 'GET' });
        if (response?.length) {
            updateBuyOrders(response);
        }
    }

    return (
        <div>
            <Header />
            <BuyOrderList buyOrders={buyOrders} selectedCountries={selectedCountries} />
        </div>
    )
}

export default BuyOrders;