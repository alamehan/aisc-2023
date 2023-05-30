import { Row, Col, Space } from 'antd';
import { Link } from 'react-router-dom';

import './about.less';

import Logo1 from "@assets/images/about-us/logo-1-gear.png";
import Logo2 from "@assets/images/about-us/logo-2-recycle-arrow.png";
import Logo3 from "@assets/images/about-us/logo-3-the-wing.png";
import Logo4 from "@assets/images/about-us/logo-4-butterfly.png";
import Dot2 from "@assets/images/home/dot-2.svg";

export default function index() {
  return (
    <div>
      <div id="page-about">
        
        { /* ---------------------------------- ROW 1 --------------------------------- */}

        <Row align="middle" id="row1" className="mt-section mb-section">
          <Col xs={{ span: 24, order: 2 }} md={{ span: 12, order: 1 }} className="row1-col1">
            <img className="logo-aisc mt-24 mb-24" />
          </Col>
          <Col xs={{ span: 24, order: 1 }} md={{ span: 12, order: 2 }} className="row1-col2">
            <div className="txt-headline purple mb-18">About AISC</div>
            <div className="txt-body text-body mb-48">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              <br/><br/>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
            <img src={Dot2} />
          </Col>
        </Row>

        { /* ---------------------------------- ROW 2 --------------------------------- */}

        <Row align="middle" justify="space-around" id="row2" className="mb-section">
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
        </Row>

        { /* ---------------------------------- ROW 3 --------------------------------- */}



        { /* ---------------------------------- ROW 4 --------------------------------- */}

        

      </div>
    </div>
  )
}
