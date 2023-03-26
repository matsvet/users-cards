import React from "react";
import '../../assets/styles/UserMiniCard.css'
import {Avatar, Card} from "antd";

const UserMiniCard = (props: any) => {
    const user = props.user

    return <Card className="miniCard" style={{  }}>
        <Card.Meta
            avatar={<Avatar src={user.img} />}
            title={user.name}
            description={user.login}
        />
        <p>Адрес</p>
        <p>{user.location}</p>
        <p>Телефон</p>
        <p>{user.cell}</p>
        <p>E-mail</p>
        <p>{user.email}</p>
    </Card>
}

export default UserMiniCard;