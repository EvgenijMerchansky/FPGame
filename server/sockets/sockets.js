const socket = require('socket.io');

module.exports = (server) => {
    let connectCounter = 0;

    io = socket(server);

    io.on('connection', (socket) => {

        connectCounter++;
        console.log(socket.id,'- new USER(id). online users -', connectCounter);

        socket.on('SEND_MESSAGE', (data) => {
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
