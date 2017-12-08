import axios from 'axios';
import 'regenerator-runtime/runtime';

export const sendToChat = ({eventName, data}) => {

    return {
        meta: {remote: true},
        type: 'SEND_TO_CHAT',
        payload: {
            eventName,
            text: data,
            id: Date.now()
        },
    }
};

export const getUsers = () => {

    const getAll = async () => {
        let userArray = await axios.get('/users');

        console.log(userArray.data, 'userArray.data');

        return userArray.data;
    };

    console.log(typeof getAll(), getAll(), 'getAll()');
};