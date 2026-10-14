import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header.jsx';
import './components/style/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
  </StrictMode>,
);
