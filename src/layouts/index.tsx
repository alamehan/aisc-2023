import { ReactNode, useState } from 'react';
import { Layout, Menu, Grid, Row, Col, Space } from 'antd';
import { Link } from 'react-router-dom';

import LogoAISC from "@assets/images/navbar/logo-aisc.png";
import Instagram from "@assets/images/footer/instagram.png";
import Line from "@assets/images/footer/line.png";
import Tiktok from "@assets/images/footer/tiktok.png";
import Linkedin from "@assets/images/footer/linkedin.png";
import IconMap from "@assets/images/footer/map.svg";
import IconEmail from "@assets/images/footer/email.svg";

const { Header, Content, Footer } = Layout;
const { useBreakpoint } = Grid;

export default function index({ children }: { children: ReactNode }) {
  const [openNavMobile, setOpenNavMobile] = useState(false);
  const screens = useBreakpoint();
  const isMobile = !screens?.md;

  return (
    <Layout>
      <Header className="header header-wrapper">
        <Menu
          className="menu-navbar"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={[
            {
              key: '/',
              label: <Link to={'/'} className="txt-title-md teal nav-hover">Home</Link>,
            },
            {
              key: '/about',
              label: <Link to={'/about'} className="txt-title-md teal nav-hover">About</Link>,
            },
            {
              key: '/competition',
              label: <Link to={'/competition'} className="txt-title-md teal nav-hover">Competition</Link>,
            },
            {
              key: '/event',
              label: <Link to={'/event'} className="txt-title-md teal nav-hover">Event</Link>,
            },
            {
              key: '/faq',
              label: <Link to={'/faq'} className="txt-title-md teal nav-hover">FAQ</Link>,
            },
          ]}
        />
      </Header>
      <Content className="content content-wrapper">
        {children}
      </Content>
      <Footer className="footer footer-wrapper">
        <Row align="middle" justify="space-between" id="row-footer">
          <Col xs={{ span: 24 }} md={{ span: 12}}>
            <div className="footer-content-text mb-4">
              <img src={IconMap} />
              <div className="txt-body text-body">Your full address here your full address here your full address here</div>
            </div>
            <div className="footer-content-text">
            <img src={IconEmail} />
              <div className="txt-body text-body">youremailhere@gmail.com</div>
            </div>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <Space size="middle" wrap className="footer-content-sosmed">
              <a href="#">
                <img src={Instagram} />
              </a>
              <a href="#">
                <img src={Line} />
              </a>
              <a href="#">
                <img src={Tiktok} />
              </a>
              <a href="#">
                <img src={Linkedin} />
              </a>
            </Space>
          </Col>
        </Row>
      </Footer>
      <Row align="middle" justify="center" className="copyright linear-combine-bg">
        <div className="txt-title-md-bold white">© AISC 2023 <span className="linear-amber-txt">#ReadyforTransition</span></div>
      </Row>
    </Layout>
  );
}
