import AuthComponent from '../../AuthComponent';

export function setScenario(scenarioId) {

  const authComponent = new AuthComponent();

  return authComponent.authFetch(`/api/selected-scenario`,
    {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({scenario_id: scenarioId})
      })
    .then(res => res.json())
    .then(res => {
      console.log(res);
    });
}
