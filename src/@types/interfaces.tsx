import userReducer from "../saga/userReducer";
import { Action as ActionForInt } from "redux";

export interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string | null;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

export interface UserData {
  img: string;
  imgMedium: string;
  name: string;
  login: string;
  location: string;
  cell: string;
  email: string;
}

export interface UserState {
  users: User[];
  page: number;
  loading: boolean;
  error: string | null;
}

export interface Action {
  type: string;
  payload?: any;
  error?: string | null;
}

export interface RootState {
  user: ReturnType<typeof userReducer>;
}

export interface FetchUsersAction extends ActionForInt {
  payload: number;
}

export type ContentProps = {
  visible: boolean;
  changeVisibility: () => void;
  setModalUserData: (user: UserData) => void;
};

export type UsersInRowProps = {
  users: UserData[];
  handleClick: (user: UserData) => void;
};

export type UserMiniCardProps = {
  user: UserData;
  handleClick: (user: UserData) => void;
};

export type UserModalCardProps = {
  user: UserData;
  visible: boolean;
  onClose: () => void;
};
