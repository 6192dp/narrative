import axios from 'axios';
import { BASE_API_URL } from './utils/constants';

export const axiosRequest = async ({ url, method, data }) => {
    try {
        const response = await axios({
            method, url: BASE_API_URL + url, data
        })
        if (response.status === 200) {
            return response.data;
        } else {
            console.log('Error in API request', response);
        }
    } catch (e) {
        console.log('Error in API request', e)
    }

}