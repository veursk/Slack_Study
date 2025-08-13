import React, { useCallback } from 'react';
import Modal from '@components/Modal';
import { Button, Input } from '@pages/SignUp/styles';
import useInput from '@hooks/useInput';

interface Props {
  show: boolean;
  onCloseModal: () => void;
}

const CreateChannelModal: React.FC<Props> = ({ show, onCloseModal }) => {
  const [newChannel, onChangeNewChannel] = useInput('');
  const onCreateWorkspace = useCallback(() => {}, []);

  if (!show) return null;

  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <form onSubmit={onCreateWorkspace}>
        <label id="channel-label">
          <span>워크스페이스 이름</span>
          <Input id="channel" value={newChannel} onChange={onChangeNewChannel} />
        </label>

        <Button type="submit">생성하기</Button>
      </form>
    </Modal>
  );
};

export default CreateChannelModal;
