import React from "react";
import UserRow from "./UserDisplay/UserRow";

const UsersInRow = (users: any) => {
    console.log(users)
    return <div>
        <UserRow/>
        <UserRow/>
        <UserRow/>
    </div>
}

export default UsersInRow;