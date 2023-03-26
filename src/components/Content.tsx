import {Link, Route, Routes} from "react-router-dom";
import React, {useEffect, useState} from "react";
import UsersInRow from "./UsersInRow";
import UsersInCards from "./UsersInCards";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsersRequest} from "../saga/actions";

// @ts-ignore
const Content = () => {

    const dispatch = useDispatch();
    // @ts-ignore
    useEffect(() => {
        console.log("-----STARTING-----")
        dispatch(fetchUsersRequest());
        console.log('after dispatch in UseEffect')
        console.log('usersSaga in useEffect:', usersSaga)
    }, [dispatch]);

    // @ts-ignore
    const usersSaga = useSelector(state => state.user.users);

    // const [data, setData] = useState(null);
    // useEffect(() => {
    //     fetch('https://randomuser.me/api/?page=1&results=10&seed=abc')
    //         .then(response => response.json())
    //         .then(data => {
    //                 setData(data);
    //             }
    //         )
    //         .catch(error => console.error(error)
    //     );
    // }, []);
    //
    // if (!data) {
    //     return <div>Loading...</div>;
    // }

    if (!usersSaga) {
        return <div>Loading...</div>;
    }
    console.log('usersSaga in Content as a Props for child components: ', usersSaga)

    const dataSource = usersSaga.map((user: any) => {
        return {
            img: user.picture.thumbnail,
            name: user.name.title + ' ' + user.name.first + ' ' + user.name.last,
            login: user.login.username,
            location: `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.postcode}`,
            cell: user.cell,
            email: user.email,
        }
    })
    // @ts-ignore
    return <main className="content">
    <Routes>
        <Route path="/table" element={<UsersInRow users={dataSource}/>}/>
        <Route path="/card" element={<UsersInCards users={dataSource}/>}/>
    </Routes>
    </main>
}

export default Content;