import React from 'react';
import { useState, useCallback } from 'react';
import { Form, Label, Input, LinkContainer, Button, Header, Error } from './styles';

const SignUp = () => {
  const [signUpError, setSignUpError] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const [email, setEmail] = useState('');
  const [nickname, setNickName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [mismatchError, setMismatchError] = useState(false);

  const onChangeEmail = useCallback((e: any) => {
    setEmail(e.target.value);
  }, []);

  const onChangeNickname = useCallback((e: any) => {
    setNickName(e.target.value);
  }, []);

  const onChangePassword = useCallback((e: any) => {
    setPassword(e.target.value);
    setMismatchError(passwordCheck !== e.target.value);
  }, [password, passwordCheck]);

  const onChangePasswordCheck = useCallback((e: any) => {
    setPasswordCheck(e.target.value);
    setMismatchError(password !== e.target.value);
  }, [password, passwordCheck]);

  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      console.log(email, nickname, password, passwordCheck);

      if (!mismatchError) {
        console.log('서버로 회원가입 통신');
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
            <Input type="text" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname} />
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
        </Label>
        <Button type="submit">회원가입</Button>
      </Form>
      <LinkContainer>이미 회원이신가요?&nbsp;</LinkContainer>
    </div>
  );
};

export default SignUp;
