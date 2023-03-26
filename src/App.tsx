import React from 'react';
import './App.css';
import './assets/styles/Content.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import {Provider} from "react-redux";
import store from "./saga/store";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Header/>
                    <Content/>
                    <div className='footerInApp'>
                        <Footer/>
                    </div>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
