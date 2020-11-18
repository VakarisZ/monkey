import React, {useEffect, useState} from 'react';

import {Col, Row} from 'react-bootstrap';

import AuthComponent from '../AuthComponent';
import ScenarioBriefContainer from '../scenarios/parsing/ScenarioBriefContainer';
import LoadingIconComponent from '../ui-components/LoadingIconComponent';
import ScenarioList from '../scenarios/components/ScenarioList';


function HomePageComponent(props) {

  const authComponent = new AuthComponent();

  let [scenarioList, setScenarioList] = useState(null);

  useEffect(() => {
    authComponent.authFetch('/api/scenario-list')
      .then(res => res.json())
      .then(res => {
        let scenarios = new ScenarioBriefContainer(res['scenario_list'])
        setScenarioList(scenarios);
      })
  }, [])

  return (
    <Col sm={{offset: 3, span: 12}} md={{offset: 3, span: 8}}
         lg={{offset: 3, span: 6}} xl={{offset: 2, span: 5}}
         className={'main'}>
      <Row>
        <Col>
          <h1 className="page-title">Scenarios</h1>
        </Col>
      </Row>
      {scenarioList === null ? <LoadingIconComponent/> : <ScenarioList scenarioList={scenarioList}/>}
    </Col>
  );
}

export default HomePageComponent;

