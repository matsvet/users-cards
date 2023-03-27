import {Route, Routes, useLocation, useSearchParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import UsersInRow from "./UsersInRow";
import UsersInCards from "./UsersInCards";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsersRequest} from "../saga/actions";
import "../assets/styles/Content.css"

// @ts-ignore
const Content = (props: any) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [view, setView] = useState(searchParams.get('tab') || 'table');
    const dispatch = useDispatch();

    const location = useLocation();

    useEffect(() => {
        // This function will be called whenever the search params in the URL change
        console.log('Search params changed:', location.search);
    }, [location.search]);

    // @ts-ignore
    useEffect(() => {
        console.log("-----STARTING-----")
        dispatch(fetchUsersRequest(props.page));
        console.log('-1-1-1-1-1-  props.page in fetch in content useEffect:', props.page)
        console.log('after dispatch in UseEffect')
        console.log('usersSaga in useEffect:', usersSaga)
    }, [dispatch]);
    // @ts-ignore

    const usersSaga = useSelector(state => state.user.users);

    const handleClickOnUserName = (user: any) => {
        props.changeVisibility()
        props.setModalUserData(user)
    }

    if (!usersSaga) {
        return <div>Loading...</div>;
    }
    console.log('usersSaga in Content as a Props for child components: ', usersSaga)

    const dataSource = usersSaga.map((user: any) => {
        return {
            img: user.picture.thumbnail,
            imgMedium: user.picture.medium,
            name: user.name.title + ' ' + user.name.first + ' ' + user.name.last,
            login: user.login.username,
            location: `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.postcode}`,
            cell: user.cell,
            email: user.email,
        }
    })
    // @ts-ignore

    return <main className="content">
    {/*<Routes>*/}
    {/*    <Route path="/">*/}
            {props.view === 'table' && <UsersInRow users={dataSource}
                                             visibility={props}
                                             setModalUserData={props.setModalUserData}
                                             handleClick={handleClickOnUserName}
            />}
            {props.view === 'card' && <UsersInCards users={dataSource}
                                              visibility={props}
                                              setModalUserData={props.setModalUserData}
                                              handleClick={handleClickOnUserName}
            />}
        {/*</Route>*/}
        {/*<Route path="/" element={<UsersInRow users={dataSource}*/}
        {/*                                          visibility={props}*/}
        {/*                                          setModalUserData={props.setModalUserData}*/}
        {/*                                          handleClick={handleClickOnUserName}*/}
        {/*/>}/>*/}
        {/*<Route path="/" element={<UsersInCards users={dataSource}*/}
        {/*                                           visibility={props}*/}
        {/*                                           setModalUserData={props.setModalUserData}*/}
        {/*                                           handleClick={handleClickOnUserName}*/}
        {/*/>}/>*/}
    {/*</Routes>*/}
    </main>
}

export default Content;