import React, { useEffect, useState } from 'react';
import { axiosRequest } from '../../api';
import Header from '../../components/Header/Header';
import { GET_DATASETS_URL } from '../../utils/constants';
import DatasetList from './components/DatasetList';

const DataSets = ({ selectedCountries, dataSets, updateDataSets, countries }) => {

    useEffect(() => {
        fetchDataSets();
    }, []);

    const fetchDataSets = async () => {
        const response = await axiosRequest({ url: GET_DATASETS_URL, method: 'GET' });
        if (response?.length) {
            updateDataSets(response);
        }
    }

    return (
        <div>
            <Header />
            <DatasetList dataSets={dataSets} selectedCountries={selectedCountries} countries={countries} />
        </div>
    )
}

export default DataSets;