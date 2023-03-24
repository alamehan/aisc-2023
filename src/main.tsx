import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ConfigProvider } from 'antd';
import { theme } from './assets/themes';
import './assets/styles/main.less';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);
