const initialState = {
    usersFromBase: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_USERS_FROM_DB':
            console.log(action.payload, 'action.payload');
            return Object.assign({}, state, {usersFromBase: [...state, action.payload]});
        default:
            return state;
    }
}
