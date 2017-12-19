const initialState = {
    newMessages: [],
    users: [],
};

export default (state = initialState, action) => {

    switch (action.type) {
        case 'SEND_TO_CHAT':

            return Object.assign({}, state, {newMessages: [...state.newMessages, action.payload]});
        case 'ADD_USER_STATUS':

            const processedUsers = state.users.map(user => {
                if (user.email === action.payload.currentUser.email) {
                    user.online = true;
                }

                return user;
            });
            return Object.assign({}, state, {users: [...processedUsers]});
        case 'ADD_USERS_WITH_BASE':

            if (state.users.length === 0) {
                return Object.assign({}, state, {users: [...action.payload]});
            } else {
                return state;
            }
        case 'UPDATE_USERS_WITH_BASE':

            return Object.assign({}, state, {users: [...action.payload]});
        default:
            return state;
    }
};