import { ReactNode, useState } from 'react';
import { Layout, Menu, Drawer, Row, Col, Space } from 'antd';
import { MenuOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';

import Instagram from "../assets/images/footer/instagram.png";
import Line from "../assets/images/footer/line.png";
import Tiktok from "../assets/images/footer/tiktok.png";
import Linkedin from "../assets/images/footer/linkedin.png";
import IconMap from "../assets/images/footer/map.svg";
import IconEmail from "../assets/images/footer/email.svg";

const { Header, Content, Footer } = Layout;

/* ---------------------------- COMPONENT: NAVBAR --------------------------- */

function AppMenu(props: { isInline: any; openMenu: any, onMenuChange: any }) {
  return (
    <Menu
      style={{ backgroundColor: "white", border: "none", justifyContent: "center" }}
      mode={ props.isInline ? "inline" : "horizontal" }
      items={[
        {
          key: '/',
          label: <Link to={'/aisc-2023/'} className="txt-title-md nav-hover" onClick={() => props.onMenuChange(false)}>Home</Link>,
        },
        {
          key: '/about',
          label: <Link to={'/aisc-2023/about'} className="txt-title-md nav-hover" onClick={() => props.onMenuChange(false)}>About</Link>,
        },
        {
          key: '/competition',
          label: <span className="txt-title-md nav-hover">Competition</span>,
          children: [
            {
              key: '/competition/poster',
              label: <Link to={'/aisc-2023/competition/poster'} className="txt-title-md nav-hover" onClick={() => props.onMenuChange(false)}>Poster</Link>,
            },
            {
              key: '/competition/paper',
              label: <Link to={'/aisc-2023/competition/paper'} className="txt-title-md nav-hover" onClick={() => props.onMenuChange(false)}>Paper</Link>,
            },
            {
              key: '/competition/etc',
              // label: <Link to={'/aisc-2023/competition/etc'} className="txt-title-md nav-hover" onClick={() => props.onMenuChange(false)}>...</Link>,
              label: <Link to={'#'} className="txt-title-md nav-hover" onClick={() => props.onMenuChange(false)}>Other...</Link>,
              disabled: true,
            },
          ]
        },
        {
          key: '/event',
          label: <span className="txt-title-md nav-hover">Event</span>,
          children: [
            {
              key: '/event/pre-events',
              label: <Link to={'/aisc-2023/event/pre-events'} className="txt-title-md nav-hover" onClick={() => props.onMenuChange(false)}>Pre Events</Link>,
            },
            {
              key: '/event/conference',
              label: <Link to={'/aisc-2023/event/conference'} className="txt-title-md nav-hover" onClick={() => props.onMenuChange(false)}>Conference</Link>,
            },
            {
              key: '/event/social-night',
              label: <Link to={'/aisc-2023/event/social-night'} className="txt-title-md nav-hover" onClick={() => props.onMenuChange(false)}>Social Night</Link>,
            },
          ]
        },
        {
          key: '/faq',
          label: <Link to={'/aisc-2023/faq'} className="txt-title-md nav-hover" onClick={() => props.onMenuChange(false)}>FAQ</Link>,
        },
      ]}
    ></Menu>
  )
}

/* ---------------------------- COMPONENT: FOOTER --------------------------- */

function AppFooter() {
  return (
    <Footer className="footer footer-wrapper">
      <Row align="middle" justify="space-between" id="row-footer">
        <Col xs={{ span: 24 }} md={{ span: 12}}>
          <div className="footer-content-text mb-4">
            <img src={IconMap} />
            <div className="txt-body text-body">Jl. Teuku Nyak Arief, RT.7/RW.8, Simprug, Kec. Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12220</div>
          </div>
          <div className="footer-content-text">
          <img src={IconEmail} />
            <div className="txt-body text-body">uperaiscofficial@gmail.com</div>
          </div>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Space size="middle" wrap className="footer-content-sosmed">
            <a href="https://www.instagram.com/aisc_2023/">
              <img src={Instagram} />
            </a>
            <a href="https://lin.ee/aisc2023">
              <img src={Line} />
            </a>
            <a href="https://www.tiktok.com/@aisc2023">
              <img src={Tiktok} />
            </a>
            <a href="https://id.linkedin.com/company/aiche-indonesia-student-conference-2023">
              <img src={Linkedin} />
            </a>
          </Space>
        </Col>
      </Row>
    </Footer>
  )
}

/* -------------------------- COMPONENT: COPYRIGHT -------------------------- */

function AppCopyright() {
  return (
    <Row align="middle" justify="center" className="copyright linear-combine-bg">
      <div className="txt-title-md-bold white">© AISC 2023 <span className="linear-amber-txt">#ReadyforTransition</span></div>
    </Row>
  )
}

/* -------------------------------- MAIN APP -------------------------------- */

export default function index({ children }: { children: ReactNode }) {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <Layout>
      <Header className="header header-wrapper">
        <div className="menu-icon">
          <MenuOutlined onClick={() => setOpenMenu(true)} rev={undefined} />
        </div>
        <div className="menu-desktop">
          <AppMenu isInline={false} openMenu={openMenu} onMenuChange={setOpenMenu} />
        </div>
        <div className="menu-mobile">
          <Drawer title={<span className="txt-title-lg-bold purple drawer-title">AISC 2023</span>} open={openMenu} onClose={() => setOpenMenu(false)} placement="right" closable={false}>
            <AppMenu isInline={true} openMenu={openMenu} onMenuChange={setOpenMenu}/>
          </Drawer>
        </div>
      </Header>
      <Content className="content content-wrapper">
        {children}
      </Content>
      <AppFooter />
      <AppCopyright />
    </Layout>
  );
}
