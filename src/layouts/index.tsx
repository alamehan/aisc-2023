import { ReactNode, useState } from 'react';
import { Layout, Menu, Grid } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content, Footer } = Layout;
const { useBreakpoint } = Grid;

export default function index({ children }: { children: ReactNode }) {
  const [openNavMobile, setOpenNavMobile] = useState(false);
  const screens = useBreakpoint();
  const isMobile = !screens?.lg;

  return (
    <Layout>
      <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', background: '#ffffff' }}>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={[
            {
              key: '/',
              label: <Link to={'/'}>Home</Link>,
            },
            {
              key: '/about',
              label: <Link to={'/about'}>About</Link>,
            },
            {
              key: '/competition',
              label: <Link to={'/competition'}>Competition</Link>,
            },
            {
              key: '/event',
              label: <Link to={'/event'}>Event</Link>,
            },
            {
              key: '/faq',
              label: <Link to={'/faq'}>FaQ</Link>,
            },
          ]}
        />
      </Header>
      <Content className="content-wrapper">
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
}
