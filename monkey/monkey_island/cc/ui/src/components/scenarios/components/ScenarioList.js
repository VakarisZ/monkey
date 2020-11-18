import React from 'react';
import {useHistory} from 'react-router-dom';

import {Col, Row} from 'react-bootstrap';

import ScenarioButtonFactory from '../parsing/ScenarioButtonFactory';
import ScenarioLinkFactory from '../parsing/ScenarioLinkFactory';
import '../../../styles/components/ScenarioList.scss';
import {setScenario} from '../parsing/ScenarioUtils';


function ScenarioList(props) {

  let history = useHistory();

  return (
    <>
      <Row className={'square-flex-container'}>
        <Col className={'square-item'}>
          {getScenarioButtonById('zero_trust')}
        </Col>
        <Col className={'square-item'}>
          {getScenarioButtonById('attack')}
        </Col>
        <Col className={'square-item'}>
          {getScenarioButtonById('cloud_security')}
        </Col>
      </Row>
      <Row>
        <Col className={'square-item'}>
          {getScenarioButtonById('credential_leak')}
        </Col>
        <Col className={'square-item'}>
          {getScenarioButtonById('else')}
        </Col>
        <Col className={'square-item'}>
        </Col>
      </Row>
      <Row className={'scenario-link-row'}>
        <Col>
          {getScenarioLinkById('quick_run')}
        </Col>
        <Col className={'filler-column'}/>
        <Col className={'right-column'}>
          {getScenarioLinkById('expert_mode')}
        </Col>
      </Row>
    </>
  )

  function getScenarioButtonById(id) {
    return getScenarioComponentById(id, ScenarioButtonFactory);
  }

  function getScenarioLinkById(id) {
    return getScenarioComponentById(id, ScenarioLinkFactory);
  }

  function getScenarioComponentById(id, factory) {
    let scenarioBrief = props.scenarioList.getScenarioBriefById(id);
    return factory({'scenarioBrief': scenarioBrief,
                    'callback': () => {scenarioSelectionCallback(scenarioBrief.id)}});
  }

  function scenarioSelectionCallback(id) {
    setScenario(id).then(history.push('/scenario'));
  }

}

export default ScenarioList;

