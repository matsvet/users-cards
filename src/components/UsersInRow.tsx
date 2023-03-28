import React from "react";
import "../assets/styles/UsersInRow.scss";
import { Avatar, Table } from "antd";
import { UserData, UsersInRowProps } from "../@types/interfaces";

const UsersInRow: React.FC<UsersInRowProps> = (props) => {
  const columns = [
    {
      title: "ФИО",
      dataIndex: "name",
      key: "name",
      render: (text: string, record: UserData) => (
        <div>
          <Avatar className="avaImageTable" src={record.img} />
          <a className="" onClick={() => props.handleClick(record)}>
            {text}
          </a>
        </div>
      ),
    },
    {
      title: "Логин",
      dataIndex: "login",
      key: "login",
    },
    {
      title: "Адрес",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Телефон",
      dataIndex: "cell",
      key: "cell",
    },
    {
      title: "E-mail",
      dataIndex: "email",
      key: "email",
    },
  ];

  return (
    <div>
      <Table
        className="tableUsersAntd"
        dataSource={props.users}
        columns={columns}
        pagination={false}
        rowKey="login"
      />
    </div>
  );
};

export default UsersInRow;
