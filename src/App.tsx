import React, {useEffect, useState} from 'react';
import './App.css';
import './assets/styles/Content.css'
import {BrowserRouter as Router, Routes, Route, useSearchParams} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import {Provider} from "react-redux";
import store from "./saga/store";
import UserModalCard from "./components/UserDisplay/UserModalCard";

function App() {
    // const [searchParams, setSearchParams] = useSearchParams({page: '1'});
    const [searchParams, setSearchParams] = useSearchParams();
    const [isModalUserVisible, setIsModalUserVisible] = useState(false)
    const [userData, setUserData] = useState([])
    const [view, setView] = useState(searchParams.get('tab') || 'table')
    const [page, setPage] = useState(Number(searchParams.get('page')) || 1)


    useEffect(() => {}, [page])

    const changeVisibility = () => setIsModalUserVisible(!isModalUserVisible)
    const setModalUserData = (user: any) => setUserData(user)
    const handleSetView = (view: string) => setView(view)
    const handleNextPage = (page: number) => {
        setPage(page + 1)
        console.log('++ NewPageState: ', page)
    }
    const handlePrevPage = (page: number) => setPage(page-1)
    const handleFirstPage = () => setPage(1)
    const handleLastPage = () => setPage(500)
    const handleSetPage = (page: number) => setPage(page)

    return (
        <Provider store={store}>
            {/*<Router>*/}
                <div className="App">
                    <UserModalCard user={userData} visible={isModalUserVisible} onClose={changeVisibility}/>
                    {/*{isModalUserVisible && 123 && <UserCard user={userData} visible={undefined} onClose={undefined}/>}*/}
                    <Header handleSetView={handleSetView}
                            view={view}
                    />
                    <Content visible={isModalUserVisible}
                             changeVisibility={changeVisibility}
                             setModalUserData={setModalUserData}
                             view={view}
                             page={page}
                    />
                    <div className='footerInApp'>
                        <Footer page={page}
                                handleNextPage={handleNextPage}
                                handlePrevPage={handlePrevPage}
                                handleFirstPage={handleFirstPage}
                                handleLastPage={handleLastPage}
                                handleSetPage={handleSetPage}
                        />
                    </div>
                </div>
            {/*</Router>*/}
        </Provider>
    );
}

export default App;
