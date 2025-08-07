import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@layouts/App/App';

const domNode = document.getElementById('app');
const root = createRoot(domNode!);

root.render(<App />);
