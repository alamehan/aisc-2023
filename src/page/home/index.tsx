import { Row, Col, Space } from 'antd';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import './home.less';
import '../slick.min.css'; // Solusi sementara
import '../slick-theme.min.css'; // Solusi sementara

import ArrowBottom from "@assets/images/home/arrow-bottom.svg";
import Established from "@assets/images/home/established.svg";
import Participant from "@assets/images/home/participant.svg";
import Competition from "@assets/images/home/competition.svg";
import TotalPrize from "@assets/images/home/total-prize.svg";
import FLG1 from "@assets/images/flags/timor-leste.svg";
import FLG2 from "@assets/images/flags/indonesia.svg";
import FLG3 from "@assets/images/flags/brunei.svg";
import FLG4 from "@assets/images/flags/vietnam.svg";
import FLG5 from "@assets/images/flags/cambodia.svg";
import FLG6 from "@assets/images/flags/malaysia.svg";
import FLG7 from "@assets/images/flags/singapore.svg";
import FLG8 from "@assets/images/flags/philippines.svg";
import FLG9 from "@assets/images/flags/thailand.svg";
import FLG10 from "@assets/images/flags/myanmar.svg";
import LogoHere from "@assets/images/logo-here.png";
import UserHere from "@assets/images/user-here.png";
import SponsorHere from "@assets/images/sponsor-here.png";
import Dot1 from "@assets/images/dot-1.svg";
import Dot2 from "@assets/images/dot-2.svg";
import ArrowLeft from "@assets/images/arrow-left.svg";
import ArrowRight from "@assets/images/arrow-right.svg";

// React Slick Custom Arrow
function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <img
      className={className}
      onClick={onClick}
      src={ArrowLeft}
      style={{
        ...style,
        display: 'block',
        position: 'absolute',
        zIndex: '100',
        top: '50%',
        left: '2.5vw',
        width: '18px',
        height: 'auto',
      }}
    />
  );
}
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <img
      className={className}
      onClick={onClick}
      src={ArrowRight}
      style={{
        ...style,
        display: 'block',
        position: 'absolute',
        zIndex: '100',
        top: '50%',
        right: '2.5vw',
        width: '18px',
        height: 'auto',
      }}
    />
  );
}

export default function index() {

  // React Slick Setup
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        // 1440px ke bawah
        breakpoint: 1440,
        settings: {
          centerPadding: "64px",
        },
      },
      {
        // 768px ke bawah
        breakpoint: 768,
        settings: {
          centerPadding: "48px",
        },
      },
    ],
  };

  return (
    <div>
      <div id="page-home">

        { /* ---------------------------------- ROW 1 --------------------------------- */ }

        <Row align="middle" id="row1" className="mt-section mb-section">
          <Col xs={{ span: 24, order: 2 }} md={{ span: 12, order: 1 }} className="row1-col1">
            <div className="txt-display-lg linear-purple-txt mb-18">AISC</div>
            <div className="txt-display-md linear-lime-txt mb-48">Indonesia Student Conference 2023</div>
            <div className="txt-headline white mb-48">#ReadyforTransition</div>
            <a href="#scroll-target">
              <img src={ArrowBottom} className="to-bottom" />
            </a>
          </Col>
          <Col xs={{ span: 24, order: 1 }} md={{ span: 12, order: 2 }} className="row1-col2">
            <img className="main-photo" />
          </Col>
        </Row>


        { /* ---------------------------------- ROW 2 --------------------------------- */}
        
        <div id="scroll-target"></div>

        <Row align="middle" justify="space-around" id="row2" className="mb-section">
          <div className="text-center mt-24 mb-24">
            <img src={Established} className="mb-18" />
            <div className="txt-headline purple">2021</div>
            <div className="txt-body text-body">was established</div>
          </div>
          <div className="text-center mt-24 mb-24">
            <img src={Participant} className="mb-18" />
            <div className="txt-headline lime">200+</div>
            <div className="txt-body text-body">pas participants</div>
          </div>
          <div className="text-center mt-24 mb-24">
            <img src={Competition} className="mb-18" />
            <div className="txt-headline amber">3</div>
            <div className="txt-body text-body">competitions</div>
          </div>
          <div className="text-center mt-24 mb-24">
            <img src={TotalPrize} className="mb-18" />
            <div className="txt-headline teal">USD 1000</div>
            <div className="txt-body text-body">total prizes</div>
          </div>
        </Row>

        { /* ---------------------------------- ROW 3 --------------------------------- */}

        <Row align="middle" justify="center" id="row3" className="mb-section">
          <Space direction="vertical" align="center" wrap>
            <div className="txt-display-md linear-combine-txt text-center mb-48">3rd AIChE Student Conference <br /> in Southeast Asia</div>
            <Space size="small" align="center" wrap className="content-center mb-48">
              <img src={FLG1} />
              <img src={FLG2} />
              <img src={FLG3} />
              <img src={FLG4} />
              <img src={FLG5} />
              <img src={FLG6} />
              <img src={FLG7} />
              <img src={FLG8} />
              <img src={FLG9} />
              <img src={FLG10} />
            </Space>
            <img src={Dot1} />
          </Space>
        </Row>

        { /* ---------------------------------- ROW 4 --------------------------------- */}

        <Row align="middle" justify="center" id="row4" className="mb-section">
          <Space direction="vertical" align="center" wrap>
            <div className="txt-headline linear-lime-txt mb-32">Competitions</div>
            <Space size="large" align="center" wrap className="content-center mb-48">
              <div className="text-center mt-12 mb-12">
                <a href="#">
                  <img src={LogoHere} />
                  <div className="txt-body white">Poster</div>
                </a>
              </div>
              <div className="text-center mt-12 mb-12">
                <a href="#">
                  <img src={LogoHere} />
                  <div className="txt-body white">Paper</div>
                </a>
              </div>
              <div className="text-center mt-12 mb-12">
                <a href="#">
                  <img src={LogoHere} />
                  <div className="txt-body white">......</div>
                </a>
              </div>
            </Space>
            <div className="txt-headline linear-lime-txt mb-32">Events</div>
            <Space size="large" align="center" wrap className="content-center">
              <div className="text-center mt-12 mb-12">
                <a href="#">
                  <img src={LogoHere} />
                  <div className="txt-body white">Pre-Events</div>
                </a>
              </div>
              <div className="text-center mt-12 mb-12">
                <a href="#">
                  <img src={LogoHere} />
                  <div className="txt-body white">Conference</div>
                </a>
              </div>
              <div className="text-center mt-12 mb-12">
                <a href="#">
                  <img src={LogoHere} />
                  <div className="txt-body white">Social Night</div>
                </a>
              </div>
            </Space>
          </Space>
        </Row>

        { /* ---------------------------------- ROW 5 --------------------------------- */}

        <Row align="middle" id="row5" className="mt-section mb-section">
          <Col xs={{ span: 24, order: 1 }} md={{ span: 12, order: 1 }} className="row5-col1">
            <img className="logo-aisc mt-24 mb-24" />
          </Col>
          <Col xs={{ span: 24, order: 2 }} md={{ span: 12, order: 2 }} className="row5-col2">
            <img src={Dot2} className="mb-48" />
            <div className="txt-headline purple mb-18">AISC</div>
            <div className="txt-body text-body mb-48">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            <Link to="/about" className="btn-lime">More About Us</Link>
          </Col>
        </Row>

        { /* ---------------------------------- ROW 6 --------------------------------- */}

        <Row align="middle" id="row6" className="mb-section">
          <div className="testi-outer">
            <Slider {...settings}>

              <div className="testi-inner">
                <Space direction="vertical" align="center" wrap>
                  <img src={UserHere} className="mb-section"/>
                  <div className="txt-headline purple mb-18">Full Name 1</div>
                  <div className="txt-body-bold text-body mb-section">Winner of ..... Competition 2022</div>
                  <div className="txt-body text-body glass-effect testi-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                </Space>
              </div>

              <div className="testi-inner">
                <Space direction="vertical" align="center" wrap>
                  <img src={UserHere} className="mb-section"/>
                  <div className="txt-headline purple mb-18">Full Name 2</div>
                  <div className="txt-body-bold text-body mb-section">Winner of ..... Competition 2022</div>
                  <div className="txt-body text-body glass-effect testi-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                </Space>
              </div>

              <div className="testi-inner">
                <Space direction="vertical" align="center" wrap>
                  <img src={UserHere} className="mb-section"/>
                  <div className="txt-headline purple mb-18">Full Name 3</div>
                  <div className="txt-body-bold text-body mb-section">Winner of ..... Competition 2022</div>
                  <div className="txt-body text-body glass-effect testi-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                </Space>
              </div>
              
            </Slider>
          </div>
        </Row>

        { /* ---------------------------------- ROW 7 --------------------------------- */}

        <Row align="middle" justify="center" id="row7" className="mb-section">
          <Space direction="vertical" align="center" wrap>
            <div className="txt-headline teal text-center mb-section">Sponsor</div>
            <Space size="middle" align="center" wrap className="content-center mb-section">
              <img src={SponsorHere} />
              <img src={SponsorHere} />
              <img src={SponsorHere} />
              <img src={SponsorHere} />
              <img src={SponsorHere} />
              <img src={SponsorHere} />
            </Space>
            <img src={Dot1} className="mb-section"/>
            <div className="txt-headline teal text-center mb-section">Supporting Partner</div>
            <Space size="middle" align="center" wrap className="content-center mb-section">
              <img src={SponsorHere} />
              <img src={SponsorHere} />
              <img src={SponsorHere} />
              <img src={SponsorHere} />
              <img src={SponsorHere} />
              <img src={SponsorHere} />
              <img src={SponsorHere} />
              <img src={SponsorHere} />
              <img src={SponsorHere} />
            </Space>
          </Space>
        </Row>

      </div>
    </div>
  )
}
