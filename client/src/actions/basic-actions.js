import axios from 'axios';
import 'regenerator-runtime/runtime';

/**
 * @actions
 * @types: redux
 */

export const sendToChat = ({eventName, data}) => {

    return {
        meta: true,
        type: 'SEND_TO_CHAT',
        payload: {
            eventName,
            text: data,
            id: Date.now()
        },
    }
};

export const getUser = ({usersArray, user}) => {

    return {
        nickname: true,
        type: 'ADD_USER_STATUS',
        payload: {
            dbUsers: usersArray,
            currentUser: user
        }
    }
};

export const sendUsersWithBase = (usersWithBase) => {

    return {
        withBase: true,
        type: 'ADD_USERS_WITH_BASE',
        payload: usersWithBase
    }
};

export const sendUpdatedUsersWithBase = (newUsersWithBase) => {

    return {
        newUsers: true,
        type: 'UPDATE_USERS_WITH_BASE',
        payload: newUsersWithBase
    }
};

/**
 * @actions
 * @types: async
 */

export const deleteUser = (deleteForEmail) => {

    axios({
        method: 'post',
        url: '/disableOnlineStatus',
        data: {
            email: deleteForEmail
        }
    });
};

export const updateUserStatus = (userForUpdate) => {

    axios({
        method: 'post',
        url: '/enableOnlineStatus',
        data: {
            email: userForUpdate.email
        }
    })
};

export const addUsersFromDataBase = ({users, adding}) => {

    axios.get('/users')
        .then(data => {
            if (users.length === 0) {
                adding(data.data);
            }
        });
};

export const updateUsersFromDataBase = (sendUpdatedUsers) => {

    axios.get('/users')
        .then(data => {
            sendUpdatedUsers(data.data);
        });
};


