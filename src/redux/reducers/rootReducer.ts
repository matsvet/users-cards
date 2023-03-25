import { combineReducers } from 'redux';
import usersReducer from "./usersReducer";
// import counterReducer from './counterReducer';
// import userReducer from './userReducer';

const rootReducer = combineReducers({
    // counter: counterReducer,
    user: usersReducer
});

export default rootReducer;