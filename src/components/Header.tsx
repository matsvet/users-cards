import React from "react";
import '../assets/styles/Header.css'
import {useLocation, useNavigate} from "react-router-dom";
import {Button, Space} from 'antd';


const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const tab = searchParams.get('tab') || 'card';

    const handleViewChange = (newTab: string) => {
        searchParams.set('tab', newTab);
        navigate({ search: `?${searchParams.toString()}` });
    };

    return <header className="header">
        <span className="headerText">Список пользователей</span>
            <Space className="buttonBlock">
                <Button className={tab === 'table' ? "button active" : "button"}
                        onClick={() => handleViewChange('table')}
                >
                    Таблица
                </Button>
                <Button className={tab === 'card' ? "button active" : "button"}
                        onClick={() => handleViewChange('card')}
                >
                    Карточки
                </Button>
            </Space>
    </header>
}

export default Header;