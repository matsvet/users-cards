import {useLocation} from "react-router-dom";
import React, {useEffect} from "react";
import UsersInRow from "./UsersInRow";
import UsersInCards from "./UsersInCards";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsersRequest} from "../saga/actions";
import "../assets/styles/Content.css"
import Loader from "../assets/images/loader.gif";


const Content = (props: any) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const page = searchParams.get('page');
    const tab = searchParams.get('tab');

    useEffect(() => {
        dispatch(fetchUsersRequest(Number(page)));
    }, [dispatch, location.search]);

    // @ts-ignore
    const usersSaga = useSelector(state => state.user);

    const handleClickOnUserName = (user: any) => {
        props.changeVisibility()
        props.setModalUserData(user)
    }

    if (usersSaga.loading) {
        return <div className="content loader">
            <img src={Loader}/>
        </div>;
    }

    const dataSource = usersSaga.users.map((user: { picture: { thumbnail: string; medium: string; }; name: { title: string; first: string; last: string; }; login: { username: string; }; location: { street: { number: string; name: string; }; city: string; state: string; postcode: string; }; cell: string; email: string; }) => {
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

    return <main className="content">
        {tab === 'table' && <UsersInRow users={dataSource}
                                        handleClick={handleClickOnUserName}
        />}
        {tab === 'card' && <UsersInCards users={dataSource}
                                         handleClick={handleClickOnUserName}
        />}
    </main>
}

export default Content;