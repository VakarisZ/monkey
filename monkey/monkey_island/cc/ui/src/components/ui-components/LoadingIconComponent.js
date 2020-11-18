import {faSync} from '@fortawesome/free-solid-svg-icons/faSync';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import '../../styles/components/LoadingIconComponent.scss';

function LoadingIconComponent() {
  return (
    <div className={'loading-icon-component'}>
      <FontAwesomeIcon icon={faSync}
                       className={`spinning-icon`}/>
    </div>
  );
}

export default LoadingIconComponent;
