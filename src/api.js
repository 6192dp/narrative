import axios from 'axios';
import { BASE_API_URL } from './utils/constants';

export const fetchRequest = async (route)=>{

    const response = await axios.get(BASE_API_URL+route);

    if(response.status === 200){
        return response.data;
    }else{
        console.log('Error in fetching route API')
    }
}