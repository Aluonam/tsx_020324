import React, { useState } from 'react';
import { Button, Modal } from 'antd';

type ButtonMoreDetailsPropTypes = {
    description:string,
    title:string
}

export const ButtonMoreDetails = ({description,title}:ButtonMoreDetailsPropTypes) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };  

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Show more
      </Button>
      <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>{description}</p>
      </Modal>
    </>
  );
};
