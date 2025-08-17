import React, { useCallback } from 'react';
import { Container, Header } from './styles';
import useInput from '@hooks/useInput';
import ChatList from '@components/ChatList';
import ChatBox from '@components/ChatBox';

const Channel = () => {
  const [chat, onChangeChat, setChat] = useInput('');

  const onSubmitForm = useCallback((e: any) => {
    e.preventDefault();
    console.log('submit');
    setChat('');
  }, []);

  return (
    <Container>
      <Header>채널!</Header>
      <ChatList />
      <ChatBox chat={chat} onChangeChat={onChangeChat} onSubmitForm={onSubmitForm} placeholder="채팅을 입력하세요" />
    </Container>
  );
};

export default Channel;
