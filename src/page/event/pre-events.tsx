import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';

import './pre-events.less';

import LogoHere from "../../assets/images/competitions-events/logo-here.png";
import IconTheme from "../../assets/images/competitions-events/theme.svg";
import IconCalendar from "../../assets/images/competitions-events/calendar.svg";

export default function index() {
  return (
    <div>
      <div id="page-pre-event">
        
        { /* ---------------------------------- ROW 1 --------------------------------- */}

        <Row align="middle" id="row1" className="mt-section mb-section">
          <Col className="col">
            <img src={LogoHere} className="mb-32"/>
            <div className="txt-headline purple mb-18">Pre-Event</div>
            <div className="txt-body text-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            <Link to="#" className="btn-lime mt-48">Register</Link>
          </Col>
        </Row>
        
        { /* ---------------------------------- ROW 2 --------------------------------- */}

        <Row align="middle" id="row2" className="mt-section mb-section">
          <Col className="col">
            <Slide direction='left'>
              <img src={IconTheme} className="mb-32"/>
              <div className="txt-headline purple mb-18">Theme</div>
              <div className="txt-display-md linear-combine-txt text-center">Event theme's here</div>
            </Slide>
          </Col>
        </Row>

        { /* ---------------------------------- ROW 3 --------------------------------- */}

        <Slide direction='right'>
          <Row align="middle" id="row3" className="mt-section mb-section">
            <Col xs={{ span: 24 }} md={{ span: 12 }} className="row3-col1">
              <img className="main-photo" />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }} className="row3-col2">
              <div className="txt-headline linear-combine-txt mb-18">Session 1: <br className="show-br"/> Session Title Here</div>
              <div className="oneline">
                <img src={IconCalendar} className="only-desktop mr-18 mb-32" style={{ marginTop: "-3px" }}/>
                <div className="txt-title-lg-bold purple">Date, Time & Location Here</div>
              </div>
              <div className="desc-card mb-24">
                <div className="txt-title-lg-bold purple mb-8">Full Name</div>
                <div className="txt-body-bold text-body mb-18">Career Position Here</div>
                <div className="txt-body text-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
              </div>
              <div className="desc-card">
                <div className="txt-title-lg-bold purple mb-8">Full Name</div>
                <div className="txt-body-bold text-body mb-18">Career Position Here</div>
                <div className="txt-body text-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
              </div>
            </Col>
          </Row>
        </Slide>

        { /* ---------------------------------- ROW 4 --------------------------------- */}

        <Slide direction='left'>
          <Row align="middle" id="row4" className="mt-section mb-section">
            <Col xs={{ span: 24 }} md={{ span: 12 }} className="row4-col1">
              <img className="main-photo" />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }} className="row4-col2">
              <div className="txt-headline linear-combine-txt mb-18">Session 2: <br className="show-br"/> Session Title Here</div>
              <div className="oneline">
                <img src={IconCalendar} className="only-desktop mr-18 mb-32" style={{ marginTop: "-3px" }}/>
                <div className="txt-title-lg-bold purple">Date, Time & Location Here</div>
              </div>
              <div className="desc-card mb-24">
                <div className="txt-title-lg-bold lime mb-8">Full Name</div>
                <div className="txt-body-bold text-body mb-18">Career Position Here</div>
                <div className="txt-body text-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
              </div>
              <div className="desc-card">
                <div className="txt-title-lg-bold lime mb-8">Full Name</div>
                <div className="txt-body-bold text-body mb-18">Career Position Here</div>
                <div className="txt-body text-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
              </div>
            </Col>
          </Row>
        </Slide>

      </div>
    </div>
  )
}
