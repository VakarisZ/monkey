import React from 'react';
import ScenarioBrief from './ScenarioBrief';

export default class ScenarioBriefContainer {
  constructor(scenarioList) {
    this.scenarioList = scenarioList.map(singleScenario => ScenarioBrief.dataToBrief(singleScenario));
  }

  getScenarioBriefById(scenarioId) {
    for (let i = 0; i < this.scenarioList.length; i++) {
      if (this.scenarioList[i].id === scenarioId) {
        return this.scenarioList[i]
      }
    }
  }
}






