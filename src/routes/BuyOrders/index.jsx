import React, { useEffect, useState } from 'react';
import { fetchRequest } from '../../api';
import Header from '../../components/Header/Header';
import { BUY_ORDERS_URL } from '../../utils/constants';
import BuyOrderList from './components/BuyOrderList';

const BuyOrders = ({ selectedCountries }) => {
    const [buyOrders, updateBuyOrders] = useState([]);

    useEffect(() => {
        fetchDataSets();
    }, []);

    const fetchDataSets = async () => {
        const response = await fetchRequest(BUY_ORDERS_URL);
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