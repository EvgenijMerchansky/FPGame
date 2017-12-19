const socketMiddlewere = (socket, requestEventName) => store => {

    return next => {

        socket.on("RECEIVE_MESSAGE", textData => {

            next({
                meta: { remote: true },
                type: 'SEND_TO_CHAT',
                payload: {
                    text: textData,
                    id: Date.now()
                },
            });
        });

        socket.on('RECEIVE_NEW_USER', newUsersObject => {

            next({
                type: 'ADD_USER_STATUS',
                payload: newUsersObject
            })
        });

        socket.on('RECEIVE_UPDATED_USERS', updatedUsers => {

            next({
                type: 'UPDATE_USERS_WITH_BASE',
                payload: updatedUsers,
            })
        });

        socket.on('RECEIVE_USERS_TO_SOCKET', usersWithBase => {

            next({
                type: 'ADD_USERS_WITH_BASE',
                payload: usersWithBase,
            })
        });

        return action => {

            if (action.nickname && action.nickname) {
                socket.emit('CONNECT_NEW_USER', action.payload); // object
            } else if (action.meta && action.meta) {
                socket.emit("NEW_MESSAGE", action.payload.text);
            } else if (action.withBase && action.withBase) {
                socket.emit('ADD_USERS_TO_SOCKET', action.payload);
            } else if (action.newUsers && action.newUsers) {
                socket.emit('UPDATE_USERS_TO_SOCKET', action.payload);
            }
        };
    }
};

export default socketMiddlewere;