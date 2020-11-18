import React, {useState} from 'react';

import StepWizard from 'react-step-wizard';
import ScenarioWizardNavigation from './ScenarioWizardNavigation';
import ScenarioProgress from './ScenarioProgress';


const ScenarioWizard = (props) => {
  const [state, setState] = useState(undefined);

  // Do something on step change
  const onStepChange = (stats) => {
    // console.log(stats);
  };

  const setInstance = SW => {
    setState({
      ...SW,
    });
  };

  return (
    <div className={'step-wizard-container'}>
      <StepWizard
        onStepChange={onStepChange}
        isHashEnabled
        nav={<ScenarioProgress/>}
        instance={setInstance}
      >
        {props.stepComponents}
      </StepWizard>
      {state !== undefined ? <ScenarioWizardNavigation wizardInstance={state}/> : ''}
    </div>
  );
};


export default ScenarioWizard;

