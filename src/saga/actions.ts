// actions.js
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const fetchUsersRequest = (page: number) => ({
    type: FETCH_USERS_REQUEST,
    payload: page
});
export const fetchUsersSuccess = (users: any) => ({
    type: FETCH_USERS_SUCCESS,
    payload: users
});
export const fetchUsersFailure = (error: any) => ({
    type: FETCH_USERS_FAILURE,
    payload: error
});
