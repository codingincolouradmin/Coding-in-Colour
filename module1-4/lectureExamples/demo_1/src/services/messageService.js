import axios from 'axios';
import config from "./config.json";

const baseUrl = `https://${config.apiKey}.mockapi.io/messages`;

const getMessages = () => {
    const request =  axios.get(`${baseUrl}`);
    return request.then(response => response.data);
}

const createMessage = (message) => {
    const request = axios.post(`${baseUrl}`, {content: message});
    return request.then(response => response.data);
}

const deleteMessage = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then(response => response.data);
}

export default { getMessages, createMessage, deleteMessage }