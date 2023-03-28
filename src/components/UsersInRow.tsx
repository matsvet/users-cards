import React from "react";
import '../assets/styles/UsersInRaw.css'
import {Avatar, Table} from "antd";

const UsersInRow = (props: any) => {
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
                </div>
            ),
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

    return <div>
        <Table className="tableUsersAntd"
               dataSource={props.users}
               columns={columns}
               pagination={false}
               rowKey="login"
        />
    </div>
}

export default UsersInRow;