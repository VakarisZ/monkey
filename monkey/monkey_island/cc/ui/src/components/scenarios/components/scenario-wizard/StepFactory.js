import React from 'react';
import ScenarioStep from './ScenarioStep';

function StepFactory(props) {
  return <ScenarioStep stepId={props.id} data={props.data}/>
}

export default StepFactory;
