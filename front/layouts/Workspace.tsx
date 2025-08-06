import React, { useCallback } from 'react';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import axios from 'axios';
import { Navigate } from 'react-router';

const Workspace: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { data, error, isLoading, mutate } = useSWR('http://localhost:3095/api/users', fetcher);

  const onLogout = useCallback(() => {
    axios
      .post('http://localhost:3095/api/users/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        mutate(false);
      });
  }, []);

  if (!data) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <button onClick={onLogout}>로그아웃</button>
      {children}
    </div>
  );
};

export default Workspace;
