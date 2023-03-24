import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return <header>
        Список пользователей
        <button className="button">
            <Link to={'/table'}>Таблица</Link>
        </button>
        <button className="button">
            <Link to={'/cards'}>Карточка</Link>
        </button>
    </header>
}

export default Header;