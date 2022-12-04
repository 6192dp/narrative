import axios from 'axios';
import { BASE_API_URL } from './utils/constants';

export const fetchRequest = async (route) => {

    const response = await axios.get(BASE_API_URL + route);

    if (response.status === 200) {
        console.log(`${route}`, response.data)
        return response.data;
    } else {
        console.log('Error in fetching route API');
    }
}

export const axiosRequest = async ({ url, method, data }) => {
    const response = await axios({
        method, url: BASE_API_URL + url, data
    })
    if (response.status === 200) {
        console.log(`${method} route`, response.data)
        return response.data;
    } else {
        console.log('Error in API request');
    }
}