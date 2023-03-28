import React from "react";
import "../../assets/styles/UserMiniCard.scss";
import { Avatar, Card } from "antd";
import { UserData, UserMiniCardProps } from "../../@types/interfaces";

const UserMiniCard: React.FC<UserMiniCardProps> = (props) => {
  const user: UserData = props.user;

  const UserTitle = () => {
    return <a onClick={() => props.handleClick(user)}>{user.name}</a>;
  };

  return (
    <Card className="miniCard">
      <Card.Meta
        className="cardHeader"
        avatar={<Avatar className="avaImage" src={user.imgMedium} />}
        title={UserTitle()}
        description={user.login}
      />
      <p className="userDataType">Адрес</p>
      <p className="userData">{user.location}</p>
      <div className="divider"></div>
      <p className="userDataType">Телефон</p>
      <p className="userData">{user.cell}</p>
      <div className="divider"></div>
      <p className="userDataType">E-mail</p>
      <p className="userData">{user.email}</p>
    </Card>
  );
};

export default UserMiniCard;
