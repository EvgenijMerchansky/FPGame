const initialState = {
    messages: [],

};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CUSTOM_MIDDLEWARE':
            return Object.assign({}, state, {messages: [...state.messages, action.payload]});
        break;
        default:
            return state;
    }
};