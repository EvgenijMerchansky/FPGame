const initialState = {
    newMessages: [],
};

export default (state = initialState, action) => {
    console.log(action.payload);

    switch (action.type) {
        case 'SEND_TO_CHAT':
            return Object.assign({}, state, {newMessages: [...state.newMessages, action.payload]});
        default:
            return state;
    }
};