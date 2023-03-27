import React from "react";
import { Modal, Card, Avatar } from 'antd';
import '../../assets/styles/UserModalCard.css'

// @ts-ignore
const UserModalCard = ({ user, visible, onClose }) => {
    console.log(user.name)
    return (
        <Modal className="custom-modal-card"
               open={visible}
               onCancel={onClose}
               footer={null}>
            <Card className="miniCard">
                <h3>Карточка пользователя</h3>
                <div className="divider"></div>
                <Card.Meta
                    className="cardHeader"
                    avatar={<Avatar className="avaImage" src={user.imgMedium} />}
                    title={user.name}
                    description={user.login}
                />
                <div className="dataTypeWithData"><p className="userDataType">Адрес</p>
                    <p className="userData">{user.location}</p></div>
                <div className="divider"></div>
                <p className="userDataType">Телефон</p>
                <p className="userData">{user.cell}</p>
                <div className="divider"></div>
                <p className="userDataType">E-mail</p>
                <p className="userData">{user.email}</p>
            </Card>
        </Modal>
    );
};

export default UserModalCard;