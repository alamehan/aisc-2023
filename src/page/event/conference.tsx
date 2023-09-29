import { Row, Col, Timeline } from 'antd';
import { Link } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';

import './conference.less';

import LogoHere from "../../assets/images/competitions-events/logo-here.png";
import IconTheme from "../../assets/images/competitions-events/theme.svg";
import IconCalendar from "../../assets/images/competitions-events/calendar-v2.svg";
import IconPrize from "../../assets/images/competitions-events/total-prize.svg";

import IconWhatsapp from "../../assets/images/competitions-events/whatsapp.png";
import IconLine from "../../assets/images/competitions-events/line.png";


export default function index() {
  return (
    <div>
      <div id="page-conference">
        
        { /* ---------------------------------- ROW 1 --------------------------------- */}

        <Row align="middle" id="row1" className="mt-section mb-section">
          <Col className="col">
            <img src={LogoHere} className="mb-32"/>
            <div className="txt-headline purple mb-18">Conference</div>
            <div className="txt-body text-body">To increase the enthusiasm of young people in striving for energy independence and energy security in Indonesia, spurring us to see the problems faced and create innovations that can encourage sustainable energy. Switching to using renewable energy can maintain the stability of the earth's temperature so as to prevent climate change. In addition, switching to new renewable energy is also able to increase energy security for Indonesia if one day oil exporting countries embargo.</div>
            <Link to="https://forms.gle/MQfFWRNzqcodCkMJ9" className="btn-lime mt-48">Register</Link>
          </Col>
        </Row>
        
        { /* ---------------------------------- ROW 2 --------------------------------- */}

        <Row align="middle" id="row2" className="mt-section mb-section">
          <Col className="col">
            <Slide direction='left'>
              <img src={IconTheme} className="mb-32"/>
              <div className="txt-headline purple mb-18">Theme</div>
              <div className="txt-display-md linear-combine-txt text-center">“Creating The Role of Student in Promoting and Achieving Sustainable Energy Targets”.</div>
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
              <div className="txt-headline linear-combine-txt mb-18">Session 1: <br className="show-br"/>Energy Diversification and Improvement of Energy Governance</div>
              {/* <div className="oneline">
                <img src={IconCalendar} className="only-desktop mr-18 mb-32" style={{ marginTop: "-3px" }}/>
                <div className="txt-title-lg-bold purple">Date, Time & Location Here</div>
              </div> */}
              <div className="desc-card mb-24">
                <div className="txt-title-lg-bold purple mb-8">Oki Murza</div>
                <div className="txt-body-bold text-body mb-18">Senior Vice President, Research & Technology Innovation, Pertamina, Indonesia</div>
                <div className="txt-body text-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
              </div>
              {/* <div className="desc-card">
                <div className="txt-title-lg-bold purple mb-8">Full Name</div>
                <div className="txt-body-bold text-body mb-18">Career Position Here</div>
                <div className="txt-body text-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
              </div> */}
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
              <div className="txt-headline linear-combine-txt mb-18">Session 2: <br className="show-br"/> The Role of Energy Transfer</div>
              {/* <div className="oneline">
                <img src={IconCalendar} className="only-desktop mr-18 mb-32" style={{ marginTop: "-3px" }}/>
                <div className="txt-title-lg-bold purple">Date, Time & Location Here</div>
              </div> */}
              <div className="desc-card mb-24">
                <div className="txt-title-lg-bold lime mb-8">Ali Nasir</div>
                <div className="txt-body-bold text-body mb-18">Career Position Here</div>
                <div className="txt-body text-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
              </div>
              {/* <div className="desc-card">
                <div className="txt-title-lg-bold lime mb-8">Full Name</div>
                <div className="txt-body-bold text-body mb-18">Career Position Here</div>
                <div className="txt-body text-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
              </div> */}
            </Col>
          </Row>
        </Slide>

        { /* ---------------------------------- ROW 5 --------------------------------- */}

        <Row align="middle" id="row5" className="mt-section mb-section">
          <Col className="col">
            <Slide direction='right'>
              <img src={IconCalendar} className="mb-32"/>
              <div className="txt-headline purple mb-48">Timeline</div>
              <Timeline
                mode="alternate"
                items={[
                  {
                    color: '#8F6DAC',
                    children: <div className="txt-body text-body">Time:<br/><span className='txt-body-bold linear-combine-txt'>09:00 AM - 12:40 PM</span></div>,
                  },
                  {
                    color: '#8F6DAC',
                    children: <div className="txt-body text-body">Place:<br/><span className='txt-body-bold linear-combine-txt'>Auditorium University of Pertamina</span></div>,
                  },
                  {
                    color: '#8F6DAC',
                    children: <div className="txt-body text-body">Day & Date:<br/><span className='txt-body-bold linear-combine-txt'>Saturday, 12th August 2023</span></div>,
                  },
                ]}
              />
            </Slide>
          </Col>
        </Row>

        { /* ---------------------------------- ROW 6 --------------------------------- */}

        <Row align="middle" id="row6" className="mt-section mb-section">
          <Col className="col">
            <Slide direction='left'>
              <img src={IconPrize} className="mb-32"/>
              <div className="txt-headline purple mb-18">Benefit</div>
              <div className="txt-body text-body">✔ Experience in participating of the event</div>
              <div className="txt-body text-body">✔ International Certificate</div>
              <div className="txt-body text-body">✔ Knowledge</div>
              <div className="txt-body text-body">✔ Relation</div>
            </Slide>
          </Col>
        </Row>

        { /* ---------------------------------- ROW 7 --------------------------------- */}

        <Row gutter={48} id="row7" className="mt-section mb-section">
          <Col xs={{ span: 24 }} md={{ span: 12 }} className="row7-col1">
            <Slide direction='right'>
              <div className='outer-card mb-24'>
                <div className="txt-headline lime mb-32">Gwen</div>
                <Row className="glass-effect inner-card">
                  <Col xs={{ span: 24 }} md={{ span: 12}}>
                    <div className="flex-card">
                      <img src={IconWhatsapp} />
                      <div className="txt-body text-body ml-18">0821-5492-9135</div>
                    </div>
                    {/* <div className="flex-card">
                    <img src={IconLine} />
                      <div className="txt-body text-body ml-18">0899-9999-9999</div>
                    </div> */}
                  </Col>
                </Row>
              </div>
            </Slide>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }} className="row7-col2">
            <Slide direction='left'>
              <div className='outer-card mb-24'>
                <div className="txt-headline amber mb-32">Patricia</div>
                <Row className="glass-effect inner-card">
                  <Col xs={{ span: 24 }} md={{ span: 12}}>
                    <div className="flex-card">
                      <img src={IconWhatsapp} />
                      <div className="txt-body text-body ml-18">0813-2000-3418</div>
                    </div>
                    {/* <div className="flex-card">
                    <img src={IconLine} />
                      <div className="txt-body text-body ml-18">0899-9999-9999</div>
                    </div> */}
                  </Col>
                </Row>
              </div>
            </Slide>
          </Col>
        </Row>

      </div>
    </div>
  )
}
