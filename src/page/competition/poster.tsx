import { Row, Col, Timeline } from 'antd';
import { Link } from 'react-router-dom';
import { Slide, Fade } from 'react-awesome-reveal';

import './poster.less';

import LogoHere from "../../assets/images/competitions-events/logo-here.png";
import IconTheme from "../../assets/images/competitions-events/theme.svg";
import IconTimeline from "../../assets/images/competitions-events/timeline.svg";
import IconPrize from "../../assets/images/competitions-events/total-prize.svg";
import IconContact from "../../assets/images/competitions-events/contact-person.svg";

import IconWhatsapp from "../../assets/images/competitions-events/whatsapp.png";
import IconLine from "../../assets/images/competitions-events/line.png";
import IconInstagram from "../../assets/images/footer/instagram.png";

export default function index() {
  return (
    <div>
      <div id="page-competition-poster">
        
        { /* ---------------------------------- ROW 1 --------------------------------- */}

        <Row align="middle" id="row1" className="mt-section mb-section">
          <Col className="col">
            <img src={LogoHere} className="mb-32"/>
            <div className="txt-headline purple mb-18">Poster</div>
            <div className="txt-body text-body">Poster competition is a competition that involves academic participants in making creative posters that display certain information or messages with an attractive and effective visual display. Participants will be judged based on the intelligence of ideas, creativity, clarity of the message conveyed, and expertise in using visual elements such as typography, color, and images. The winner in this competition is usually selected by a jury consisting of experts in the field.</div>
            <Link to="#" className="btn-lime mt-48">Register</Link>
          </Col>
        </Row>
        
        { /* ---------------------------------- ROW 2 --------------------------------- */}

        <Row align="middle" id="row2" className="mt-section mb-section">
          <Col className="col">
            <Slide direction='left'>
              <img src={IconTheme} className="mb-32"/>
              <div className="txt-headline purple mb-18">Theme</div>
              <div className="txt-display-md linear-combine-txt text-center mb-18">"Save Life with Renewable Energy"</div>
              <div className="txt-body text-body">Participants of the activity are expected to know how to utilize renewable energy properly and correctly. Even public awareness about the importance of the environment and sustainability needs to be increased so that the demand for renewable energy can also increase.</div>
              <div className="txt-headline purple mt-32 mb-18">Case</div>
              <div className="txt-body text-body">
                Awareness that will save lives. Remote areas isolated from the main power grid and dependent on unreliable or hard-to-reach fossil fuel-based power plants. This can impede access to essential health services, such as hospitals or health centers, and risk threatening the lives of local residents. 
                <br/><br/>
                In these cases, the installation of solar panels as a renewable energy source can be an effective solution. Solar panels can supply stable and sustainable electricity to healthcare facilities, including the provision of power for essential medical equipment such as breathing apparatus, diagnostic equipment, refrigeration for vaccine storage, and adequate lighting. 
                <br/><br/>
                By using renewable energy in situations like these, human lives can be saved and access to essential healthcare can be improved. In addition, the use of renewable energy also helps reduce air pollution and the effects of climate change, which ultimately also contributes to human health and well-being.
              </div>
            </Slide>
          </Col>
        </Row>

        { /* ---------------------------------- ROW 3 --------------------------------- */}

        <Row align="middle" id="row3" className="mt-section mb-section">
          <Col className="col">
            <Slide direction='right'>
              <img src={IconTimeline} className="mb-32"/>
              <div className="txt-headline purple mb-48">Timeline</div>
              <Timeline
                mode="alternate"
                items={[
                  {
                    color: '#8F6DAC',
                    children: <div className="txt-body text-body"><span className='txt-body-bold linear-combine-txt'>May 22-25, 2023</span><br/>Open Registration</div>,

                  },
                  {
                    color: '#8F6DAC',
                    children: <div className="txt-body text-body"><span className='txt-body-bold linear-combine-txt'>May 22, 2023</span><br/>Case Released</div>,

                  },
                  {
                    color: '#8F6DAC',
                    children: <div className="txt-body text-body"><span className='txt-body-bold linear-combine-txt'>May 31 - Jul 21, 2023</span><br/>Paper Submission</div>,

                  },
                  {
                    color: '#8F6DAC',
                    children: <div className="txt-body text-body"><span className='txt-body-bold linear-combine-txt'>Jul 27, 2023</span><br/>5 Finalist Announcement</div>,

                  },
                  {
                    color: '#8F6DAC',
                    children: <div className="txt-body text-body"><span className='txt-body-bold linear-combine-txt'>Aug 12, 2023</span><br/>Presentation and Competition Day at Pertamin University</div>,

                  },
                  {
                    color: '#8F6DAC',
                    children: <div className="txt-body text-body"><span className='txt-body-bold linear-combine-txt'>Aug 12, 2023</span><br/>Winner Announcement at Pertamina University</div>,

                  },
                ]}
              />
            </Slide>
          </Col>
        </Row>

        { /* ---------------------------------- ROW 4 --------------------------------- */}

        <Row align="middle" id="row4" className="mt-section mb-section">
          <Col className="col">
            <Slide direction='left'>
              <img src={IconPrize} className="mb-32"/>
              <div className="txt-headline purple mb-18">Total Prize</div>
              <div className="txt-display-md linear-combine-txt text-center mb-18">Win a total prize of USD 1010</div>
            </Slide>
          </Col>
        </Row>

        { /* ---------------------------------- ROW 5 --------------------------------- */}

        <Fade cascade damping={0.2}>
          <Row align="middle" id="row5" className="mt-section mb-section">
            <Col className="col">
              <img src={IconContact} className="mb-18"/>
              <div className="txt-headline purple">Contact Person</div>
            </Col>
          </Row>
        </Fade>

        { /* ---------------------------------- ROW 6 --------------------------------- */}
        
        <Row gutter={48} id="row6" className="mt-section mb-section">
          <Col xs={{ span: 24 }} md={{ span: 12 }} className="row6-col1">
            <Slide direction='right'>
              <div className='outer-card mb-24'>
                <div className="txt-headline lime mb-32">Alya Zahra Poham</div>
                <Row className="glass-effect inner-card">
                  <Col xs={{ span: 24 }} md={{ span: 12}}>
                    <div className="flex-card mb-18">
                      <img src={IconWhatsapp} />
                      <div className="txt-body text-body ml-18">0852-7439-9062</div>
                    </div>
                    <div className="flex-card">
                    <img src={IconInstagram} />
                      <div className="txt-body text-body ml-18">alzapoo</div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Slide>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }} className="row6-col2">
            <Slide direction='left'>
              <div className='outer-card mb-24'>
                <div className="txt-headline amber mb-32">Rahma Elfrita</div>
                <Row className="glass-effect inner-card">
                  <Col xs={{ span: 24 }} md={{ span: 12}}>
                    <div className="flex-card mb-18">
                      <img src={IconWhatsapp} />
                      <div className="txt-body text-body ml-18">0831-2821-3817</div>
                    </div>
                    <div className="flex-card">
                    <img src={IconInstagram} />
                      <div className="txt-body text-body ml-18">r.elfritaaa</div>
                    </div>
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
