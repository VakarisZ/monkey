import React from 'react';
import PropTypes from 'prop-types';

import {Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

import '../../styles/components/ScenarioButton.scss';


function ScenarioButton(props) {
  return (
        <Button key={`${props.name}-scenario-button`}
                variant={'outline-monkey'}
                onClick={props.onClick}
                className={'scenario-button'}
        >
          {props.important ? <FontAwesomeIcon icon={faStar} className={'star'}/> : ''}
          {props.name}
        </Button>
  );
}

ScenarioButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  important: PropTypes.bool
}

export default ScenarioButton;
