import React from 'react';

import ScenarioButton from '../components/ScenarioButton';


function ScenarioButtonFactory(props) {

  return (<ScenarioButton onClick={props.callback}
                          name={props.scenarioBrief.name}
                          description={props.scenarioBrief.description}
                          important={props.scenarioBrief.important}/>)
}

export default ScenarioButtonFactory;
