import { CaretRightOutlined } from '@ant-design/icons';
import { Row, Col, Collapse, theme } from 'antd';
import type { CollapseProps } from 'antd';
import type { CSSProperties } from 'react';
import { Fade } from 'react-awesome-reveal';

import './faq.less';
import IconQnA from "../../assets/images/faq/q-and-a.svg";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
  {
    key: '1',
    label: <div className="txt-title-lg-bold teal mb-8">Question 1</div>,
    children: <div className="txt-body text-body glass-effect">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>,
    style: panelStyle,
  },
  {
    key: '2',
    label: <div className="txt-title-lg-bold teal mb-8">Question 2</div>,
    children: <div className="txt-body text-body glass-effect">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>,
    style: panelStyle,
  },
  {
    key: '3',
    label: <div className="txt-title-lg-bold teal mb-8">Question 3</div>,
    children: <div className="txt-body text-body glass-effect">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>,
    style: panelStyle,
  },
  {
    key: '4',
    label: <div className="txt-title-lg-bold teal mb-8">Question 4</div>,
    children: <div className="txt-body text-body glass-effect">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>,
    style: panelStyle,
  },
  {
    key: '5',
    label: <div className="txt-title-lg-bold teal mb-8">Question 5</div>,
    children: <div className="txt-body text-body glass-effect">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>,
    style: panelStyle,
  },
  {
    key: '6',
    label: <div className="txt-title-lg-bold teal mb-8">Question 6</div>,
    children: <div className="txt-body text-body glass-effect">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>,
    style: panelStyle,
  },
  {
    key: '7',
    label: <div className="txt-title-lg-bold teal mb-8">Question 7</div>,
    children: <div className="txt-body text-body glass-effect">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>,
    style: panelStyle,
  },
  {
    key: '8',
    label: <div className="txt-title-lg-bold teal mb-8">Question 8</div>,
    children: <div className="txt-body text-body glass-effect">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>,
    style: panelStyle,
  },
  {
    key: '9',
    label: <div className="txt-title-lg-bold teal mb-8">Question 9</div>,
    children: <div className="txt-body text-body glass-effect">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>,
    style: panelStyle,
  },
];

export default function index() {
  const { token } = theme.useToken();

  const panelStyle = {
    padding: '12px 12px 0px 12px',
    marginBottom: 12,
    background: '#F1F5F9',
    borderRadius: '24px',
    border: 'none',
  };

  return (
    <div>
      <div id="page-faq">

        { /* ---------------------------------- ROW 1 --------------------------------- */}

        <Row align="middle" id="row1" className="mt-section mb-section">
          <Col className="col">
            <img src={IconQnA} className="mb-32"/>
            <div className="txt-headline purple mb-18">FAQ</div>
            <div className="txt-display-md linear-combine-txt text-center">Frequenty Asked Questions</div>
          </Col>
        </Row>

        { /* ---------------------------------- ROW 2 --------------------------------- */}

        <div className="mt-section mb-section">
          <Fade>
            <Collapse
              accordion
              bordered={false}
              defaultActiveKey={['1']}
              expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} rev={undefined} />}
              style={{ background: "white" }}
              items={getItems(panelStyle)}
            />
          </Fade>
        </div>

      </div>
    </div>
  )
}
