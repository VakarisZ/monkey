import React from 'react';

import ScenarioLink from '../components/ScenarioLink';


function ScenarioLinkFactory(props) {

  return (<ScenarioLink onClick={props.callback}
                        name={props.scenarioBrief.name}
                        description={props.scenarioBrief.description}
                        important={props.scenarioBrief.important}/>)
}

export default ScenarioLinkFactory;
