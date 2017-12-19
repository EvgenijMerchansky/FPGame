const socket = require('socket.io');

module.exports = (server) => {
    const io = socket(server);

    io.sockets.on('connect', (socket) => {

        socket.on('CONNECT_NEW_USER', (connectNewUsers) => {

            io.emit('RECEIVE_NEW_USER', connectNewUsers);
        });

        socket.on('ADD_USERS_TO_SOCKET', (usersWithBase) => {

            io.emit('RECEIVE_USERS_TO_SOCKET', usersWithBase);
        });

        socket.on('UPDATE_USERS_TO_SOCKET', (newUsers) => {

            io.emit('RECEIVE_UPDATED_USERS', newUsers);
        });

        socket.on('NEW_MESSAGE', (textData) => {

            io.emit('RECEIVE_MESSAGE', textData);
        });

        socket.on('disconnect', () => {
            console.log('disconnected')
        });
    });
};
