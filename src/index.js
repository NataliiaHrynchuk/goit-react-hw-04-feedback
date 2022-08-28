import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import './index.css';

const theme = {
  colors: {
    text: '#010101',
  },
  space: [0, 4, 8, 16, 32]
  }

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider  theme={theme}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeProvider>
);
