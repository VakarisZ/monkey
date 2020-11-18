import React from 'react';
import {Button} from 'react-bootstrap';

import '../../../../styles/components/scenario-wizard/Navigation.scss';


const ScenarioWizardNavigation = ({wizardInstance}) => (
  <div className={'scenario-wizard-navigation'}>
    <Button variant={'secondary'}
            size={'lg'}
            className={'back-button'}
            onClick={wizardInstance.previousStep}>Previous Step</Button>
    <Button variant={'primary'}
            size={'lg'}
            className={'next-button'}
            onClick={wizardInstance.nextStep}>Next Step</Button>
  </div>
);

export default ScenarioWizardNavigation;
