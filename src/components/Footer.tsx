import React, {useState} from "react";
import '../assets/styles/Footer.css'
import {Button, Input, Select} from "antd";

const Footer = (props: any) => {
    const [valueInputPage, setValueInputPage] = useState(props.page);

    const handleChange = (event: any) => {
        console.log(event)
        setValueInputPage(event.target.value);
    }

    const handleNextPage = () => {
        props.handleNextPage(props.page)
        setValueInputPage(props.page+1)
    }

    const pageAmount = 10000/20


    return <footer className="footer">
        <div className="leftBlock">
            {/*<div className="showByBlock">*/}
            {/*    Показывать по:*/}
            {/*    <Select className="selectShowBy"/>*/}
            {/*</div>*/}
            <div className="numberOfPages">{(props.page*20-19)} - {props.page*20} из 10000</div>
        </div>
        <div className="rightBlock">
            <div className="pageDisplayBlock">
                <Input className="inputPage"
                       value={valueInputPage}
                       onChange={handleChange}
                       onPressEnter={() => props.handleSetPage(valueInputPage)}
                />
                из {pageAmount} страниц
            </div>
            <div className="prevNextPageBlock">
                <Button className={"pageButton"}
                        disabled={props.page === 1}
                        onClick={props.handleFirstPage}
                >
                    {'<<'}
                </Button>
                <Button className="pageButton"
                        disabled={props.page === 1}
                        onClick={() => props.handlePrevPage(props.page)}
                >
                    {'<'}
                </Button>
                <Button className="pageButton"
                        disabled={props.page === 500}
                        onClick={handleNextPage}
                >
                    {'>'}
                </Button>
                <Button className="pageButton"
                        disabled={props.page === 500}
                        onClick={props.handleLastPage}
                >
                    {'>>'}
                </Button>
            </div>
        </div>
    </footer>
}

export default Footer;