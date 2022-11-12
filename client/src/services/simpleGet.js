import axios from 'axios';

export const simpleGet = (url) => {
    const response = axios.get(url);
    return response;
}