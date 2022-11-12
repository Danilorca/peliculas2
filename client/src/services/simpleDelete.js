import axios from 'axios';

export const simpleDelete = (url) => {
    const response = axios.delete(url);
    return response;
}
