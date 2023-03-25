import React from "react";
import '../assets/styles/Header.css'
import {Link} from "react-router-dom";
import {Button, Space} from 'antd';


const Header = () => {
    return <header className="header">
        Список пользователей
        <div className="buttonBlock">
            <Space>
            <Button className="button active">
                <Link to={'/table'}>Таблица</Link>
            </Button>
            <Button className="button">
                <Link to={'/card'}>Карточка</Link>
            </Button>
            </Space>
        </div>
    </header>
}

export default Header;