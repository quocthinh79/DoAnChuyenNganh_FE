import { IQuestion } from '@core';
import instanceAxiosChatbot from '../instance-axios/instanceAxiosChatbot';

export const apiChatAnswer = (question: IQuestion) => {
    return instanceAxiosChatbot.post('/chat', question).then((res) => res.data);
};
