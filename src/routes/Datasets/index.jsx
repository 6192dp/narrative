import React, { useEffect, useState } from 'react';
import { fetchRequest } from '../../api';
import Header from '../../components/Header/Header';
import { GET_DATASETS_URL } from '../../utils/constants';
import DatasetList from './components/DatasetList';

const DataSets = ({ selectedCountries, dataSets, updateDataSets }) => {

    useEffect(() => {
        fetchDataSets();
    }, []);

    const fetchDataSets = async () => {
        const response = await fetchRequest(GET_DATASETS_URL);
        if (response?.length) {
            updateDataSets(response);
        }
    }

    return (
        <div>
            <Header />
            <DatasetList dataSets={dataSets} selectedCountries={selectedCountries} />
        </div>
    )
}

export default DataSets;