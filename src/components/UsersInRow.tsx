import React, {useState} from "react";
import '../assets/styles/UsersInRaw.css'
import {Avatar, Table} from "antd";
import UserModalCard from "./UserDisplay/UserModalCard";

const UsersInRow = (props: any) => {

    console.log('What we are getting through props in UsersInRow to final render it using map', props)

    const pageSizeConfig = {
        pageSize: 20,
    }

    const columns = [
        {
            title: 'ФИО',
            dataIndex: 'name',
            key: 'name',
            render: (text: string, record: any) => (
                <div>
                    <Avatar className="avaImageTable" src={record.img}/>
                    <a className="" onClick={() => props.handleClick(record)}>
                        {text}
                    </a>
                </div>),
        },
        {
            title: 'Логин',
            dataIndex: 'login',
            key: 'login',
        },
        {
            title: 'Адрес',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: 'Телефон',
            dataIndex: 'cell',
            key: 'cell',
        },
        {
            title: 'E-mail',
            dataIndex: 'email',
            key: 'email',
        },
    ];

    console.log('DataSource: ', props.users)

    return <div>
        <Table className="tableUsersAntd"
               dataSource={props.users}
               columns={columns}
               pagination={false}
        />
    </div>
}

export default UsersInRow;