import { User } from "../@types/interfaces";

export const FETCH_USERS_REQUEST: string = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS: string = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE: string = "FETCH_USERS_FAILURE";

export const fetchUsersRequest = (page: number) => ({
  type: FETCH_USERS_REQUEST,
  payload: page,
});
export const fetchUsersSuccess = (users: User[]) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});
export const fetchUsersFailure = (error: any) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});
