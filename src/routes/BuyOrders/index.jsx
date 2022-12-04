import React, { useEffect, useState } from 'react';
import { fetchRequest } from '../../api';
import Header from '../../components/Header/Header';
import { GET_BUY_ORDERS_URL } from '../../utils/constants';

const BuyOrders = ({selectedCountries}) => {
    const [buyOrders, updateBuyOrders] = useState([]);

    useEffect(()=> {
        fetchDataSets();
    }, []);

    const fetchDataSets = async()=>{
        const response = await fetchRequest(GET_BUY_ORDERS_URL);
        console.log(response);
        if(response?.length){
            updateBuyOrders(response);
        }
    }

    return (
        <div>
            <Header/>
            Buy Orders
        </div>
    )
}

export default BuyOrders;