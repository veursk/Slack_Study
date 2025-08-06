import React from 'react';
import { useState, useCallback } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Link } from 'react-router-dom';

import { Form, Label, Input, LinkContainer, Button, Header, Error } from './styles';
import useInput from '@hooks/useInput';

const SignUp = () => {
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickName] = useInput('');
  const [password, , setPassword] = useInput(''); // 가운데 프로퍼티를 안 쓰고 싶으면 빈칸처리해도 된다!(구조분해에서 가능)
  const [passwordCheck, , setPasswordCheck] = useInput('');
  const [mismatchError, setMismatchError] = useState(false);
  const [signUpError, setSignUpError] = useState('');
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const onChangePassword = useCallback(
    (e: any) => {
      setPassword(e.target.value);
      setMismatchError(passwordCheck !== e.target.value);
    },
    [password, passwordCheck],
  );

  const onChangePasswordCheck = useCallback(
    (e: any) => {
      setPasswordCheck(e.target.value);
      setMismatchError(password !== e.target.value);
    },
    [password, passwordCheck],
  );

  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      console.log(email, nickname, password, passwordCheck);

      // 비동기 요청의 후 setState 작업이 있을 경우 state 변수들을 초기화하는것이 좋다
      setSignUpError('');
      setSignUpSuccess(false);

      if (!mismatchError) {
        console.log('서버로 회원가입 통신');
        axios
          .post(
            'http://localhost:3095/api/users',
            {
              email,
              nickname,
              password,
            },
            {
              withCredentials: true,
            },
          )
          .then((response: AxiosResponse) => {
            console.log(response);
            setSignUpSuccess(true);
          })
          .catch((error) => {
            setSignUpError(error.response.data);
          })
          .finally(() => {});
      }
    },
    [email, nickname, password, passwordCheck, mismatchError],
  );

  return (
    <div id="container">
      <Header>Sleact</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label id="nickname-label">
          <span>닉네임</span>
          <div>
            <Input type="text" id="nickname" name="nickname" value={nickname} onChange={onChangeNickName} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>
        </Label>
        <Label id="password-check-label">
          <span>비밀번호 확인</span>
          <div>
            <Input
              type="password"
              id="password-check"
              name="password-check"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
          </div>
          {mismatchError && <Error>비밀번호가 일치하지 않습니다</Error>}
          {signUpError && <Error>{signUpError}</Error>}
        </Label>
        <Button type="submit">회원가입</Button>
      </Form>
      <LinkContainer>
        이미 회원이신가요?&nbsp;<Link to="/login">로그인 하러가기</Link>
      </LinkContainer>
    </div>
  );
};

export default SignUp;
