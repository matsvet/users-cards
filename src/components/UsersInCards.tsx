import React from "react";
import UserMiniCard from "./UserDisplay/UserMiniCard";
import "../assets/styles/UsersInCards.scss";
import { UserData, UsersInRowProps } from "../@types/interfaces";

const UsersInCards: React.FC<UsersInRowProps> = (props) => {
  return (
    <div className="userMiniCardsContainer">
      {props.users.map((user: UserData) => (
        <UserMiniCard
          user={user}
          handleClick={props.handleClick}
          key={user.login}
        />
      ))}
    </div>
  );
};

export default UsersInCards;
