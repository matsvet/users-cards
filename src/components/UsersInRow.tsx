import React, {useState} from "react";
import '../assets/styles/UsersInRaw.css'
import {Avatar, Table} from "antd";
import UserCard from "./UserDisplay/UserModalCard";

const UsersInRow = (props: any) => {
    const [visible, setVisible] = useState(false)

    console.log('What we are getting through props in UsersInRow to final render it using map', props)

    const pageSizeConfig = {
        pageSize: 20,
    }


    const columns = [
        {
            title: 'ФИО',
            dataIndex: 'name',
            key: 'name',
            render: (text: any, record: any) => (
                <div>
                    <Avatar className="avaImage" src={record.img}/>
                    <a className=""
                       // onClick={() => <UserCard user={record} visible={!visible} onClose={undefined} />}
                    >
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
        <Table dataSource={props.users}
               columns={columns}
               pagination={pageSizeConfig}
            // showFooter={false}
        />
        {/*<UserCard user={dataSource[0]} visible={true} onClose={undefined}/>*/}
    </div>
}

export default UsersInRow;