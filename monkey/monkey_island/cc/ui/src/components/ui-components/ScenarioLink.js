import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import {Button} from 'react-bootstrap';

import '../../styles/components/ScenarioLink.scss';


function ScenarioLink(props) {

  let alignment = props.alignment || 'right';

  return (
    <div className={`scenario-link-${alignment}`} >
        <Button key={`${props.name}-scenario-button`}
                variant={'link'}
                onClick={props.onClick}
                className={'scenario-link-button'} >
          {props.name}
        </Button>
        <p className={'scenario-link-description'}>
          {props.description}
        </p>
    </div>
  );
}

ScenarioLink.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  alignment: PropTypes.oneOf(['left', 'right']),
  onClick: PropTypes.func.isRequired
}

export default ScenarioLink;
