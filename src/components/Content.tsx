import {Link, Route, Routes} from "react-router-dom";
import React, {useEffect, useState} from "react";
import UsersInRow from "./UsersInRow";
import UsersInCards from "./UsersInCards";

interface MyComponentProps {
    data: { [key: string]: any };
}
// @ts-ignore
const Content = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('https://randomuser.me/api/?page=1&results=10&seed=abc')
            .then(response => response.json())
            .then(data => {setData(data);
            console.log(data)
            console.log(data.results)  }
            )
            .catch(error => console.error(error));
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }


    // @ts-ignore
    return <body className="content">
        <Routes>
            <Route path="/table" element={<UsersInRow users ={data}/>}/>
            <Route path="/card" element={<UsersInCards/>}/>
            {/*<Route path="/card" element={<UsersInCards users ={data}/>}/>*/}
        </Routes>
    </body>
}

export default Content;