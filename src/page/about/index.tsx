import { Row, Col, Carousel, Image } from 'antd';
import { Slide, Fade } from 'react-awesome-reveal';

import './about.less';

import Logo1 from "../../assets/images/about-us/logo-1-gear.png";
import Logo2 from "../../assets/images/about-us/logo-2-recycle-arrow.png";
import Logo3 from "../../assets/images/about-us/logo-3-the-wing.png";
import Logo4 from "../../assets/images/about-us/logo-4-butterfly.png";
import Example from "../../assets/images/about-us/gallery-example.png";
import Dot2 from "../../assets/images/home/dot-2.svg";
import PhotoHere from "../../assets/images/about-us/photo-here.png";

export default function index() {
  return (
    <div>
      <div id="page-about">
        
        { /* ---------------------------------- ROW 1 --------------------------------- */}

        <Row align="middle" id="row1" className="mt-section mb-section">
          <Col xs={{ span: 24, order: 2 }} md={{ span: 12, order: 1 }} className="row1-col1">
            <Slide direction="left">
              <img className="logo-aisc mt-24 mb-24" />
            </Slide>
          </Col>
          <Col xs={{ span: 24, order: 1 }} md={{ span: 12, order: 2 }} className="row1-col2">
            <Slide direction="right">
              <div className="txt-headline purple mb-18">About AISC</div>
              <div className="txt-body text-body mb-48">
                AISC (AIChE Indonesia Student Conference) is an annual event organized by AIChE and has several competitions, such as paper competitions, presentation competitions, and chemical technology competitions, which are attended by participants from universities throughout Indonesia.
              </div>
              <img src={Dot2} />
            </Slide>
          </Col>
        </Row>

        { /* ---------------------------------- ROW 2 --------------------------------- */}

        <Row align="middle" justify="space-around" id="row2" className="mb-section">
          <Fade cascade damping={0.2}>
            <div className="text-center mt-24 mb-24">
              <img src={Logo1} className="mb-18" />
              <div className="logo-1">
                <div className="txt-headline purple">Gear</div>
                <div className="txt-body text-body">Engineering</div>
              </div>
            </div>
            <div className="text-center mt-24 mb-24">
              <img src={Logo2} className="mb-18" />
              <div className="logo-2">
                <div className="txt-headline lime">Recycle Arrow</div>
                <div className="txt-body text-body">Renewable Energy</div>
              </div>
            </div>
            <div className="text-center mt-24 mb-24">
              <img src={Logo3} className="mb-18" />
              <div className="logo-3">
                <div className="txt-headline amber">The Wing</div>
                <div className="txt-body text-body">3rd AISC</div>
              </div>
            </div>
            <div className="text-center mt-24 mb-24">
              <img src={Logo4} className="mb-18" />
              <div className="logo-4">
                <div className="txt-headline teal">Butterfly</div>
                <div className="txt-body text-body">As a part of Transition</div>
              </div>
            </div>
          </Fade>
        </Row>

        { /* ---------------------------------- ROW 3 --------------------------------- */}

        <Slide direction="left">
          <Row align="middle" id="row3" className="mt-section mb-section">
            <Col xs={{ span: 24, order: 1 }} md={{ span: 12, order: 2 }} className="row3-col1">
              <img className="main-photo" />
            </Col>
            <Col xs={{ span: 24, order: 2 }} md={{ span: 12, order: 1 }} className="row3-col2">
              <div className="txt-headline lime mb-18">About SDG 2030</div>
              <div className="txt-body text-body">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                <br/><br/>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </div>
            </Col>
          </Row>
        </Slide>

        { /* ---------------------------------- ROW 4 --------------------------------- */}

        <Slide direction="right">
          <div id="row4" className="mt-section mb-section" >
            <Carousel autoplay dots={true} dotPosition='bottom' speed={1000} slidesToShow={2}>
              <div>
                <Image src={Example} className="main-photo"/>
              </div>
              <div>
                <Image src={PhotoHere} className="main-photo"/>
              </div>
              <div>
                <Image src={PhotoHere} className="main-photo"/>
              </div>
              <div>
                <Image src={PhotoHere} className="main-photo"/>
              </div>
            </Carousel>
          </div>
        </Slide>

      </div>
    </div>
  )
}
