import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

const middleware = applyMiddleware(logger, thunk);
const store = createStore(rootReducer, composeWithDevTools(middleware));

export default store;