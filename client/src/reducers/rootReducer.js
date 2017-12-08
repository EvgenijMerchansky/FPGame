import { combineReducers } from 'redux';
import newMessageReducer from './newMessageReducer';

const rootReducer = combineReducers({
    newMessageReducer,
    // - - -
});

export default rootReducer;