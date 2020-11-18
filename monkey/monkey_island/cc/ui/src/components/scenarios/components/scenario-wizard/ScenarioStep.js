import React from 'react';
import {formValidationFormats} from '../../../configuration-components/ValidationFormats';
import transformErrors from '../../../configuration-components/ValidationErrorMessages';
import Form from "react-jsonschema-form-bs4";

function ScenarioStep(props) {
  let formProperties = {};
  formProperties['schema'] = props.data;
  formProperties['formData'] = props.data;
  formProperties['customFormats'] = formValidationFormats;
  formProperties['transformErrors'] = transformErrors;
  formProperties['className'] = 'config-form';
  formProperties['liveValidate'] = true;

  console.log(props);

  return (
    <div className={'scenario-step-wrapper'}>
      <Form {...formProperties} />
    </div>
  )
}

export default ScenarioStep;
