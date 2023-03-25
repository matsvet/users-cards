import React from 'react';
import './App.css';
import './assets/styles/Content.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
    return (
        <Router>
            <div className="App">
                Main Section app
                <Header/>
                <Content/>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
