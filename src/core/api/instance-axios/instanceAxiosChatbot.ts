import { API_CHATBOT } from '@constant';
import axios from 'axios';

const instanceAxiosChatbot = axios.create({
    baseURL: API_CHATBOT,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instanceAxiosChatbot;
