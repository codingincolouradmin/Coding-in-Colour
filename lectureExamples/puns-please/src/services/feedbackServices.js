import axios from 'axios';
import config from "./config.json"

const baseUrl = `https://${config.apiKey}.mockapi.io/feedback`;

const sendFeedback = (feedback) => {
    const request = axios.post(baseUrl, feedback);
    return request.then(response => response.data);
}

export default { sendFeedback }