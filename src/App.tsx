import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import UsersInRow from "./components/UsersInRow";
import UsersInCards from "./components/UsersInCards";

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/table" element={<UsersInRow/>}/>
                    <Route path="/cards" element={<UsersInCards/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
