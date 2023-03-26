import React from "react";
import '../assets/styles/Footer.css'
import {Button, Input, Select} from "antd";

const Footer = () => {
    return <footer className="footer">
        <div className="leftBlock">
            <div className="showByBlock">
                Показывать по:
                <Select className="selectShowBy"/>
            </div>
            <div className="numberOfPages">1-20 из 10000</div>
        </div>
        <div className="rightBlock">
            <div className="pageDisplayBlock">
                <Input className="inputPage"/>
                из {500} страниц
            </div>
            <div className="prevNextPageBlock">
                <Button>{'<<'}</Button>
                <Button>{'<'}</Button>
                <Button>{'>'}</Button>
                <Button>{'>>'}</Button>
            </div>
        </div>
    </footer>
}

export default Footer;