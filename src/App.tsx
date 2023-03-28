import React, {useEffect, useState} from 'react';
import './App.css';
import './assets/styles/Content.css'
import {useNavigate, useLocation} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import {Provider} from "react-redux";
import store from "./saga/store";
import UserModalCard from "./components/UserDisplay/UserModalCard";

function App() {
    const location = useLocation();
    const navigate = useNavigate();

    const searchParams = new URLSearchParams(location.search);

    const [isModalUserVisible, setIsModalUserVisible] = useState(false)
    const [userData, setUserData] = useState([])
    const tab = searchParams.get('tab') || 'table'
    const page = Number(searchParams.get('page'))

    useEffect(() => {
        if ((!page) || (Number(page) < 1) || (Number(page) > 500)) {
            navigate(`/?page=1&tab=${tab}`);
        }
    }, []);

    const changeVisibility = () => setIsModalUserVisible(!isModalUserVisible)
    const setModalUserData = (user: any) => setUserData(user)

    return (
        <Provider store={store}>
            <div className="App">
                <UserModalCard user={userData} visible={isModalUserVisible} onClose={changeVisibility}/>
                <Header/>
                <Content visible={isModalUserVisible}
                         changeVisibility={changeVisibility}
                         setModalUserData={setModalUserData}
                         view={tab}
                         page={page}
                />
                <div className='footerInApp'>
                    <Footer/>
                </div>
            </div>
        </Provider>
    );
}

export default App;
