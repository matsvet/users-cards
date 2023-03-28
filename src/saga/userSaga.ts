import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { Action } from 'redux';

interface User {
    // toDo userType
}

interface FetchUsersAction extends Action {
    payload: {
        page: number;
        results: number;
    };
}

function* fetchUsers(action: FetchUsersAction): Generator<any, any, any> {
    try {
        const page = action.payload;
        const response = yield call(
            axios.get,
            `https://randomuser.me/api/?nat=us&page=${page}&results=${20}&seed=abc`
        );
        const users: User[] = response.data.results;
        yield put({ type: 'FETCH_USERS_SUCCESS', payload: users });
    } catch (error) {
        yield put({ type: 'FETCH_USERS_FAILURE', error });
    }
}

function* userSaga() {
    yield takeLatest('FETCH_USERS_REQUEST', fetchUsers);
}

export default userSaga;
