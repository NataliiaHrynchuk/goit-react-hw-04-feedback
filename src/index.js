import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from '@emotion/react';
import './index.css';

export const theme = {
  colors: {
    text: '#010101',
  },
  space: [ '0px', '4px', '8px', '16px', '32px' ]
  }

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider  theme={theme}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeProvider>
);
