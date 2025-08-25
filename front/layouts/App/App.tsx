import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import loadable from '@loadable/component';
import Channel from '@pages/Channel';
import DirectMessage from '@pages/DirectMessage';

const LogIn = loadable(() => import('@pages/Login'));
const SingUp = loadable(() => import('@pages/SignUp'));
const Workspace = loadable(() => import('@layouts/Workspace'));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/workspace/:workspace" element={<Workspace />}>
          <Route path="channel/:channel" element={<Channel />} />
          <Route path="dm/:id" element={<DirectMessage />} />
          <Route index element={<Navigate to="channel/일반" replace />} />
          <Route path="*" element={<Navigate to="channel/일반" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
