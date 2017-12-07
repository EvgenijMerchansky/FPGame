import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

import io from "socket.io-client";
const socket = io();

const socketMiddlewere = (socket, requestEventName) => store => {

    return next => {

        socket.on(requestEventName, data => {

            next({
                meta: { remote: true },
                type: 'CUSTOM_MIDDLEWARE',
                payload: {
                    text: data,
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

const middleware = applyMiddleware(thunk, socketMiddlewere(socket, "RECEIVE_MESSAGE"));
export const store = createStore(rootReducer, composeWithDevTools(middleware));

// socket.on("RECEIVE_MESSAGE", (data) => {
//     // action.payload.text = data;
//     console.log(action, 'ACT');
//     // console.log(data, 'my no hardcode data');
//
//     // return next(action);
// })