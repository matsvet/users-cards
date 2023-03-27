import React, {useState} from "react";
import '../assets/styles/Header.css'
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {Button, Space} from 'antd';


const Header = (props: any) => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const handleViewChange = (newView: string) => {
        console.log(newView)
        setSearchParams({ tab: newView });
        console.log({ tab: newView })
        console.log(searchParams)
        // navigate(`?${searchParams.toString()}`, { replace: true });
        console.log(`it's search params: ?${searchParams.toString()}`)
        props.handleSetView(newView)
    };

    return <header className="header">
            <span className="headerText">Список пользователей</span>
            <div className="buttonBlock">
                <Space>
                    <Button className={props.view === 'table' ? "button active" : "button"}
                            onClick={() => handleViewChange('table')}
                    >
                        Таблица
                        {/*<Link to={'/table'}>Таблица</Link>*/}
                    </Button>
                    <Button className={props.view === 'card' ? "button active" : "button"}
                            onClick={() => handleViewChange('card')}
                    >
                        Карточки
                        {/*<Link to={'/card'}>Карточки</Link>*/}
                    </Button>
                </Space>
                {/*<Space>*/}
                {/*    <Button className={"button active"}>*/}
                {/*        <Link to="/?tab=table">Таблица</Link>*/}
                {/*    </Button>*/}
                {/*    <Button className="button">*/}
                {/*        <Link to={'/?tab=card'}>Карточки</Link>*/}
                {/*    </Button>*/}
                {/*</Space>*/}
            </div>
    </header>
}

export default Header;