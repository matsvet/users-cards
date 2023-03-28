import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import UsersInRow from "./UsersInRow";
import UsersInCards from "./UsersInCards";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersRequest } from "../saga/actions";
import "../assets/styles/Content.scss";
import Loader from "../assets/images/loader.gif";
import { ContentProps, RootState, User, UserData } from "../@types/interfaces";

const Content: React.FC<ContentProps> = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page: string | null = searchParams.get("page");
  const tab: string | null = searchParams.get("tab");

  useEffect(() => {
    dispatch(fetchUsersRequest(Number(page)));
  }, [dispatch, location.search]);

  const usersSaga = useSelector((state: RootState) => state.user);

  const handleClickOnUserName = (user: UserData) => {
    props.changeVisibility();
    props.setModalUserData(user);
  };

  if (usersSaga.loading) {
    return (
      <div className="content loader">
        <img src={Loader} />
      </div>
    );
  }

  const dataSource: UserData[] = usersSaga.users.map((user: User) => {
    return {
      img: user.picture.thumbnail,
      imgMedium: user.picture.medium,
      name: user.name.title + " " + user.name.first + " " + user.name.last,
      login: user.login.username,
      location: `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.postcode}`,
      cell: user.cell,
      email: user.email,
    };
  });

  return (
    <main className="content">
      {tab === "table" && (
        <UsersInRow users={dataSource} handleClick={handleClickOnUserName} />
      )}
      {tab === "card" && (
        <UsersInCards users={dataSource} handleClick={handleClickOnUserName} />
      )}
    </main>
  );
};

export default Content;
