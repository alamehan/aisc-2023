import { Row, Col, Timeline } from 'antd';
import { Link } from 'react-router-dom';
import { Slide, Fade } from 'react-awesome-reveal';

import './paper.less';

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
      <div id="page-competition-paper">
        
        { /* ---------------------------------- ROW 1 --------------------------------- */}

        <Row align="middle" id="row1" className="mt-section mb-section">
          <Col className="col">
            <img src={LogoHere} className="mb-32"/>
            <div className="txt-headline purple mb-18">Paper</div>
            <div className="txt-body text-body">Paper competition is an academic competition that requires participants to write a scientific paper that reviews a particular topic or issue using formal language and accurate references. Assessment in paper competition competitions is usually based on certain. criteria such as origin, clarity and accuracy of content, research, strong arguments, clarity of structure, and writing style. Winners in this competition are usually selected by a jury consisting of experts in the field.</div>
            <Link to="#" className="btn-lime mt-48">Register</Link>
          </Col>
        </Row>
        
        { /* ---------------------------------- ROW 2 --------------------------------- */}

        <Row align="middle" id="row2" className="mt-section mb-section">
          <Col className="col">
            <Slide direction='left'>
              <img src={IconTheme} className="mb-32"/>
              <div className="txt-headline purple mb-18">Theme</div>
              <div className="txt-display-md linear-combine-txt text-center mb-18">“The Impact of Affordable, <br /> Clean, Sustainable and Renewable <br /> Energy for Society”</div>
              <div className="txt-body text-body">Activity participants are expected to know the equitable impact of using clean and affordable energy, as well as renewable energy. In addition, it encourages activity participants to save energy and be sensitive to energy problems that occur.</div>
              <div className="txt-headline purple mt-32 mb-18">Case</div>
              <div className="txt-body text-body">
                “Improvement of Life Standard”
                <br/><br/>
                At this time about 1 billion people of the world's population do not have access to electricity, for example 16 out of 20 countries with the largest deficits in access to electricity are in Africa. Without good access to electricity, many people's daily activities "or processes will be hampered and this will have a very fatal impact.
                <br/><br/>
                For example, many school children cannot do homework at night, clinics cannot stock vaccines for children, hospital care activities will be hampered, people cannot run competitive businesses and cannot work or most simply put, people have to spend hours fetching water or can't even get water.
                <br/><br/>
                Therefore, with affordable, clean, sustainable and renewable energy projects, it is hoped that the problem of access to electricity will be resolved so that people's lives can develop more easily, because our everyday lives depend on reliable and affordable energy services to function smoothly and to develop equity.
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
                    children: <div className="txt-body text-body"><span className='txt-body-bold linear-combine-txt'>May 20-25, 2023</span><br/>Open Registration</div>,

                  },
                  {
                    color: '#8F6DAC',
                    children: <div className="txt-body text-body"><span className='txt-body-bold linear-combine-txt'>May 20, 2023</span><br/>Case Released</div>,

                  },
                  {
                    color: '#8F6DAC',
                    children: <div className="txt-body text-body"><span className='txt-body-bold linear-combine-txt'>May 25-31, 2023</span><br/>Abstract Submission</div>,

                  },
                  {
                    color: '#8F6DAC',
                    children: <div className="txt-body text-body"><span className='txt-body-bold linear-combine-txt'>Jun 1 - Jul 1, 2023</span><br/>Paper Submission</div>,

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
                <div className="txt-headline lime mb-32">Hasna Gitti Cyntia</div>
                <Row className="glass-effect inner-card">
                  <Col xs={{ span: 24 }} md={{ span: 12}}>
                    <div className="flex-card mb-18">
                      <img src={IconWhatsapp} />
                      <div className="txt-body text-body ml-18">0812-2798-6265</div>
                    </div>
                    <div className="flex-card">
                    <img src={IconInstagram} />
                      <div className="txt-body text-body ml-18">hasnacyntia</div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Slide>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }} className="row6-col2">
            <Slide direction='left'>
              <div className='outer-card mb-24'>
                <div className="txt-headline amber mb-32">Nanda Destiyana</div>
                <Row className="glass-effect inner-card">
                  <Col xs={{ span: 24 }} md={{ span: 12}}>
                    <div className="flex-card mb-18">
                      <img src={IconWhatsapp} />
                      <div className="txt-body text-body ml-18">0812-8988-2829</div>
                    </div>
                    <div className="flex-card">
                    <img src={IconInstagram} />
                      <div className="txt-body text-body ml-18">nandadestiyanaaa</div>
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
