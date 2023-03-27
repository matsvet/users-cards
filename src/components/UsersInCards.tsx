import React from "react";
import UserMiniCard from "./UserDisplay/UserMiniCard";
import '../assets/styles/UsersInCards.css'

// const UsersInRow = (users: {results: any[]}) => {
const UsersInCards = (props: any) => {
    let users = props.users

    return <div className="userMiniCardsContainer">
    {users.map((user: any) => (<UserMiniCard user={user}
                                             visibility={props.visibility}
                                             setModalUserData={props.setModalUserData}
                                             handleClick={props.handleClick}
                                             key={user.login}
    />))}
    </div>
}

export default UsersInCards;