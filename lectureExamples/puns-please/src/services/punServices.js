import axios from 'axios';
import config from "./config.json"

const baseUrl = `https://${config.apiKey}.mockapi.io/puns`;

const getPuns = () => {
    const request = axios.get(baseUrl);
    console.log('request', request);
    return request.then(response => response.data);
}

export default { getPuns }