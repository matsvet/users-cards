import { Action, UserState } from "../@types/interfaces";

const initialState: UserState = {
  users: [],
  page: 1,
  loading: false,
  error: null,
};

function userReducer(state = initialState, action: Action) {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      return { ...state, loading: true, page: action.payload };
    case "FETCH_USERS_SUCCESS":
      return { ...state, users: action.payload, loading: false, error: null };
    case "FETCH_USERS_FAILURE":
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
}

export default userReducer;
