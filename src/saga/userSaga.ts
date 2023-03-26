import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { Action } from 'redux';

interface User {
    // define the User type here
}

interface FetchUsersAction extends Action {
    payload: {
        page: number;
        results: number;
    };
}

function* fetchUsers(action: FetchUsersAction): Generator<any, any, any> {
    console.log('before try catch in FetchUsers')
    try {
        // const { page, results } = action.payload;
        const page = 1
        const results = 20
        const response = yield call(
            axios.get,
            `https://randomuser.me/api/?nat=us&page=${page}&results=${results}`
        );
        console.log('fetching Users')
        const users: User[] = response.data.results;
        yield put({ type: 'FETCH_USERS_SUCCESS', payload: users });
        console.log('users in userSaga after yield put FETCH_USERS_SUCCESS:', users)
    } catch (error) {
        console.log(error)
        yield put({ type: 'FETCH_USERS_FAILURE', error });
    }
}

function* userSaga() {
    console.log('we are in userSaga')
    yield takeLatest('FETCH_USERS_REQUEST', fetchUsers);
}

export default userSaga;
