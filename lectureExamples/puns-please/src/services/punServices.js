import axios from 'axios';
import config from "./config.json"

const baseUrl = `https://${config.apiKey}.mockapi.io/puns`;

const getPuns = () => {
    const request = axios.get(`${baseUrl}`);
    return request.then(response => response.data);
}

const likePun = (pun) => {
    const newPun = {
        ...pun,
        likes: pun.likes + 1
    }
    const request = axios.put(`${baseUrl}/${pun.id}`, newPun);
    return request.then(response => response.data)
}

const deletePun = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then(response => response.data)
}

export default { getPuns, likePun, deletePun };