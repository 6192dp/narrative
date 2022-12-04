import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { axiosRequest, fetchRequest } from '../../api';
import Header from '../../components/Header/Header';
import { BUY_ORDERS_URL } from '../../utils/constants';
import BuyOrderDetailsCard from './components/BuyOrderDetailsCard';

const BuyOrderDetails = ({ countries }) => {
    const [buyOrder, updateBuyOrder] = useState(null);

    const { orderId } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        fetchDataSets();
    }, []);

    const fetchDataSets = async () => {
        const response = await fetchRequest(`${BUY_ORDERS_URL}/${orderId}`);
        console.log(response);
        updateBuyOrder(response);

    }

    const handleDeleteOrderClick = async () => {
        const response = await axiosRequest({ url: `${BUY_ORDERS_URL}/${orderId}`, method: 'DELETE' })
        console.log(response);
        navigate('/', { replace: true })
    }

    return (
        <div>
            <Header />
            <BuyOrderDetailsCard buyOrder={buyOrder} countries={countries} handleDeleteOrderClick={handleDeleteOrderClick} />
        </div>
    )
}

export default BuyOrderDetails;