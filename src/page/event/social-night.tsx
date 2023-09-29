import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';

import './social-night.less';

import LogoHere from "../../assets/images/competitions-events/logo-here.png";
import IconTheme from "../../assets/images/competitions-events/theme.svg";
import IconCalendar from "../../assets/images/competitions-events/calendar.svg";

export default function index() {
  return (
    <div>
      <div id="page-social-night">
        
        { /* ---------------------------------- ROW 1 --------------------------------- */}

        <Row align="middle" id="row1" className="mt-section mb-section">
          <Col className="col">
            <img src={LogoHere} className="mb-32"/>
            <div className="txt-headline purple mb-18">Social Night</div>
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
              <div className="txt-display-md linear-combine-txt text-center">Social Night theme's here</div>
            </Slide>
          </Col>
        </Row>

      </div>
    </div>
  )
}
