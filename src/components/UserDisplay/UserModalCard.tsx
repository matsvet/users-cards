import React from "react";
import { Modal, Card, Avatar } from 'antd';

// @ts-ignore
const UserCard = ({ user, visible, onClose }) => {
    return (
        <Modal visible={visible} onCancel={onClose} footer={null}>
            <Card>
                <Card.Meta
                    avatar={<Avatar src={user.img} />}
                    title={user.name}
                    description={user.email}
                />
                <p>Address: {user.location}</p>
                <p>Phone: {user.cell}</p>
            </Card>
        </Modal>
    );
};

export default UserCard;