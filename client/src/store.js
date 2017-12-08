import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
// import { logger } from 'redux-logger'; if you want watch to logs from logger //
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import io from "socket.io-client";
// middleWares //
import socketMiddlewere from './middlewares/socketMiddlewere';
// root reducer //
import rootReducer from './reducers/rootReducer';

const socket = io();

const middleware = applyMiddleware(thunk, socketMiddlewere(socket, "RECEIVE_MESSAGE"));
export const store = createStore(rootReducer, composeWithDevTools(middleware));