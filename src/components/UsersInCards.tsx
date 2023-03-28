import React from "react";
import UserMiniCard from "./UserDisplay/UserMiniCard";
import '../assets/styles/UsersInCards.css'


const UsersInCards = (props: any) => {
    let users = props.users

    return <div className="userMiniCardsContainer">
    {users.map((user: any) => (<UserMiniCard user={user}
                                             handleClick={props.handleClick}
                                             key={user.login}
    />))}
    </div>
}

export default UsersInCards;