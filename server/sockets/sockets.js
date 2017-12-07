const socket = require('socket.io');

module.exports = (server) => {
    let connectCounter = 0;

    const io = socket(server);

    io.sockets.on('connect', (socket) => {

        connectCounter++;
        console.log(socket.id,'- new USER(id). online users -', connectCounter);

        socket.on('NEW_MESSAGE', (data) => {
            console.log(socket.id, '- say: ', data);
            data.id = socket.id;
            data.index = connectCounter++;
            io.emit('RECEIVE_MESSAGE', data);
        });

        socket.on('disconnect', () => {
            connectCounter--;
            console.log(socket.id,'- new USER(id). online users -', connectCounter);
        });
    });
};
