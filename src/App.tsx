import { Fragment } from 'react';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

import { AppstoreOutlined, CalendarOutlined, LinkOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd/es/menu';

type MenuItem = Required<MenuProps>['items'][number];

import HomePage from './page/home';
import AboutPage from './page/about';
import CompetitionPage from './page/competition';
import EventPage from './page/event';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/competition',
    element: <CompetitionPage />,
  },
  {
    path: '/event',
    element: <EventPage />,
  },
]);

function App() {
  return (
    <Fragment>
      <div>main app</div>
    </Fragment>
  );
}

export default App;
