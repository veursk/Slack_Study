import React, { useCallback } from 'react';
import Modal from '@components/Modal';
import { Button, Input } from '@pages/SignUp/styles';
import useInput from '@hooks/useInput';
import axios from 'axios';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import { IChannel, IUser } from '@typings/db';
import fetcher from '@utils/fetcher';

interface Props {
  show: boolean;
  onCloseModal: () => void;
  setShowCreateChannelModal: (flag: boolean) => void;
}

const CreateChannelModal: React.FC<Props> = ({ show, onCloseModal, setShowCreateChannelModal }) => {
  const [newChannel, onChangeNewChannel, setNewChannel] = useInput('');
  const { workspace } = useParams<{
    workspace: string;
  }>();

  const { data: userData } = useSWR<IUser | false>('http://localhost:3095/api/users', fetcher);

  const { data: channelData, mutate: mutateChannel } = useSWR<IChannel[]>(
    userData ? `http://localhost:3095/api/workspaces/${workspace}/channels` : null,
    fetcher,
  );

  const onCreateChannel = useCallback(
    (e: any) => {
      e.preventDefault();
      axios
        .post(
          `http://localhost:3095/api/workspaces/${workspace}/channels`,
          {
            name: newChannel,
          },
          {
            withCredentials: true,
          },
        )
        .then(() => {
          setShowCreateChannelModal(false);
          mutateChannel();
          setNewChannel('');
        })
        .catch((error) => {
          console.dir(error);
          toast.error(error.response.data, { position: 'bottom-center' });
        });
    },
    [newChannel, workspace],
  );

  if (!show) return null;

  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <form onSubmit={onCreateChannel}>
        <label id="channel-label">
          <span>채널 이름</span>
          <Input id="channel" value={newChannel} onChange={onChangeNewChannel} />
        </label>

        <Button type="submit">생성하기</Button>
      </form>
    </Modal>
  );
};

export default CreateChannelModal;
