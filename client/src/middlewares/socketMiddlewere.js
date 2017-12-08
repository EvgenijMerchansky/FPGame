const socketMiddlewere = (socket, requestEventName) => store => {

    return next => {

        socket.on(requestEventName, textData => {

            next({
                meta: { remote: true },
                type: 'SEND_TO_CHAT',
                payload: {
                    text: textData,
                    id: Date.now()
                },
            });
        });

        return action => {
            if (action.meta && action.meta.remote) {

                socket.emit(action.payload.eventName, action.payload.text);
            }
        };
    }
};

export default socketMiddlewere