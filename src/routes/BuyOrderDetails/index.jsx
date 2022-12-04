import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { axiosRequest, fetchRequest } from '../../api';
import Header from '../../components/Header/Header';
import { BUY_ORDERS_URL, GET_DATASETS_URL } from '../../utils/constants';
import BuyOrderDetailsCard from './components/BuyOrderDetailsCard';

const BuyOrderDetails = ({ countries, dataSets, updateDataSets }) => {
    const [buyOrder, updateBuyOrder] = useState(null);

    const { orderId } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        fetchBuyOrderDetails();
        if (dataSets.length === 0) {
            fetchDataSets();
        }
    }, []);

    const fetchBuyOrderDetails = async () => {
        const response = await fetchRequest(`${BUY_ORDERS_URL}/${orderId}`);
        updateBuyOrder(response);
    }

    const fetchDataSets = async () => {
        const response = await fetchRequest(GET_DATASETS_URL);
        if (response?.length) {
            updateDataSets(response);
        }
    }

    const handleSaveOrder = async (data) => {
        const response = await axiosRequest({ url: `${BUY_ORDERS_URL}/${orderId}`, method: 'PUT', data });
        if (response) {
            navigate('/', { replace: true })
        }

    }

    const handleDeleteOrderClick = async () => {
        const response = await axiosRequest({ url: `${BUY_ORDERS_URL}/${orderId}`, method: 'DELETE' });
        navigate('/', { replace: true })
    }

    return (
        <div>
            <Header />
            <BuyOrderDetailsCard buyOrder={buyOrder} countries={countries} handleDeleteOrderClick={handleDeleteOrderClick}
                dataSets={dataSets} handleSaveOrder={handleSaveOrder} />
        </div>
    )
}

export default BuyOrderDetails;