import React from 'react';

import {Col, Row} from 'react-bootstrap';

import ScenarioButton from '../ui-components/ScenarioButton';
import '../../styles/pages/HomePage.scss';
import ScenarioLink from '../ui-components/ScenarioLink';

class HomePageComponent extends React.Component {

  render() {
    return (
      <Col sm={{offset: 3, span: 12}} md={{offset: 3, span: 8}}
           lg={{offset: 3, span: 6}} xl={{offset: 2, span: 5}}
           className={'main'}>
        <Row>
          <Col>
            <h1 className="page-title">Scenarios</h1>
          </Col>
        </Row>
        <Row className={'square-flex-container'}>
          <Col className={'square-item'}>
            <ScenarioButton onClick={() => {
              console.log('clicked')
            }}
                            name={'ZeroTrust assessment'}
                            important={true}/>
          </Col>
          <Col className={'square-item'}>
            <ScenarioButton onClick={() => {
              console.log('clicked')
            }}
                            name={'ATT&CK assessment'}
                            important={true}/>
          </Col>
          <Col className={'square-item'}>
            <ScenarioButton onClick={() => {
              console.log('clicked')
            }}
                            name={'Cloud Security Scan Cloud Security Scan Cloud Security Scan'}/>
          </Col>
        </Row>
        <Row>
          <Col className={'square-item'}>
            <ScenarioButton onClick={() => {
              console.log('clicked')
            }}
                            name={'Cloud Security Scan'}/>
          </Col>
          <Col className={'square-item'}>
            <ScenarioButton onClick={() => {
              console.log('clicked')
            }}
                            name={'ATT&CK'}/>
          </Col>
          <Col className={'square-item'}>
          </Col>
        </Row>
        <Row>
          <Col>
            <ScenarioLink name={'Quick Run'}
                          onClick={() => {console.log('clicked')}}
                          description={'Run now with default configuration'}/>
          </Col>
          <Col></Col>
          <Col>
            <ScenarioLink name={'Expert mode'}
                          description={'Fine tune everything'}
                          onClick={() => {console.log('clicked')}}
                          alignment={'left'}/>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default HomePageComponent;

