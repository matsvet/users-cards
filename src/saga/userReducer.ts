interface User {
    // define the User type here
}

interface UserState {
    users: User[];

    page: number;
    results: string;
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
    page: 1,
    results: '20',
    loading: false,
    error: null,
};

function userReducer(state = initialState, action: Action) {
    switch (action.type) {
        case 'FETCH_USERS_REQUEST':
            return { ...state, loading: true, page: action.payload };
        case 'FETCH_USERS_SUCCESS':
            return { ...state, users: action.payload, loading: false, error: null };
        case 'FETCH_USERS_FAILURE':
            return { ...state, error: action.error, loading: false };
        default:
            return state;
    }
}

export default userReducer;
