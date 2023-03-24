import { ReactNode } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

export default function index({ children }: { children: ReactNode }) {
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
      <Content className="site-layout" style={{ padding: '0 50px', minHeight: '80vh' }}>
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
}
