import axios from 'axios';

export const simplePost = (url, values) => {
    const response = axios.post(url, values);
    return response;
}
