import React, {useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';

import AuthComponent from '../AuthComponent';
import ScenarioWizard from '../scenarios/components/scenario-wizard/ScenarioWizard';
import StepFactory from '../scenarios/components/scenario-wizard/StepFactory';


function ScenarioPage(props) {

  const authComponent = new AuthComponent();

  let [stepComponents, setStepComponents] = useState(undefined);

  useEffect(() => {
    // TODO what happens is scenario is not yet chosen
    authComponent.authFetch('/api/scenario-wizard')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        let stepComponents = generateStepComponentsFromData(res.steps);
        setStepComponents(stepComponents);
      })
  }, [])

  return (
    <Col sm={{offset: 3, span: 12}} md={{offset: 3, span: 8}}
         lg={{offset: 3, span: 6}} xl={{offset: 2, span: 5}}
         className={'main'}>
      <Row>
        <Col>
          <h1 className="page-title">Scenario configuration</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          {stepComponents === undefined ? '' : <ScenarioWizard stepComponents={stepComponents}/>}
        </Col>
      </Row>
    </Col>
  );
}

function generateStepComponentsFromData(stepsData) {
  let components = [];
  for (let i = 0; i < stepsData.length; i++) {
    components.push(StepFactory(stepsData[i]));
  }
  return components;
}

export default ScenarioPage;

