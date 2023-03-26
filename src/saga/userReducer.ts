interface User {
    // define the User type here
}

interface UserState {
    users: User[];
    loading: boolean;
    error: any;
}

interface Action {
    type: string;
    payload?: any;
    error?: any;
}

const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
};

function userReducer(state = initialState, action: Action) {
    switch (action.type) {
        case 'FETCH_USERS_REQUEST':
            console.log('case: FETCH_USERS_REQUEST')
            return { ...state, loading: true };
        case 'FETCH_USERS_SUCCESS':
            console.log('case: FETCH_USERS_SUCCESS')
            return { ...state, users: action.payload, loading: false, error: null };
        case 'FETCH_USERS_FAILURE':
            return { ...state, error: action.error, loading: false };
        default:
            return state;
    }
}

export default userReducer;
