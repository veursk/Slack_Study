import React, { CSSProperties, PropsWithChildren, useCallback } from 'react';
import { CloseModalButton, CreateMenu } from './styles';

interface Props {
  children: React.ReactNode;
  show: boolean;
  onCloseModal: (e: any) => void;
  style: CSSProperties;
  closeButton?: boolean;
}

const Menu: React.FC<Props> = ({ children, style, show, onCloseModal, closeButton = true }) => {
  // 나를 눌렀을 때는 메뉴가 안 닫히고, 부모를 눌렀을 때는 닫혀야함
  const stopPropagation = useCallback((e: any) => {
    e.stopPropagation();
  }, []);

  return (
    <CreateMenu onClick={onCloseModal}>
      <div style={style} onClick={stopPropagation}>
        {closeButton && <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>}
        {children}
      </div>
    </CreateMenu>
  );
};

export default Menu;
