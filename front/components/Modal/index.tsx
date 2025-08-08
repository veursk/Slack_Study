import React, { useCallback } from 'react';
import { CloseModalButton, CreateModal } from './styles';

interface Props {
  show: boolean;
  children: React.ReactNode;
  onCloseModal: () => void;
}

const Modal: React.FC<Props> = ({ show, children, onCloseModal }) => {
  const stopPropagation = useCallback((e: any) => {
    e.stopPropagation();
  }, []);

  if (!show) {
    return null;
  }

  return (
    <CreateModal onClick={onCloseModal}>
      <div onClick={stopPropagation}>
        <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>
        {children}
      </div>
    </CreateModal>
  );
};

export default Modal;
