import flask_restful

from monkey_island.cc.resources.auth.auth import jwt_required
from monkey_island.cc.services.config_schema.basic import BASIC
from monkey_island.cc.services.config_schema.basic_network import BASIC_NETWORK
from monkey_island.cc.services.config_schema.definitions.definitions import DEFINITIONS


class ScenarioWizard(flask_restful.Resource):

    exploiter_data = BASIC
    exploiter_data['definitions'] = DEFINITIONS

    steps = [
        {'id': 1, 'type': 'config', 'context': 'Configure network scope', 'data': BASIC_NETWORK},
        {'id': 2, 'type': 'config', 'context': 'Exploiters', 'data': exploiter_data},
        {'id': 3, 'type': 'optional', 'context': 'Configure network scope', 'data': BASIC_NETWORK}]
    current_step = 1

    @jwt_required
    def get(self):
        # Return all steps here
        return {'steps': ScenarioWizard.steps, 'current_step': ScenarioWizard.current_step}

    @jwt_required
    def post(self, scenario_id):
        # Post step data to save it here
        return ""

    def add_definitions_to_data(self, data, definitions):
        data['definitions'] = DEFINITIONS
        return data
