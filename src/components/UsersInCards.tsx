import React from "react";
import UserMiniCard from "./UserDisplay/UserMiniCard";
import '../assets/styles/UsersInCards.css'

// const UsersInRow = (users: {results: any[]}) => {
const UsersInCards = (props: any) => {
    let users = props.users

    return <div className="userMiniCardsContainer">
    {users.map((user: any) => (<UserMiniCard user={user}/>))}
    </div>
}

export default UsersInCards;