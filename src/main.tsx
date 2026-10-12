import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'lib/SCSSvariables.scss'; // initialize css root variables
import 'lib/assets/styles/index.scss';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
