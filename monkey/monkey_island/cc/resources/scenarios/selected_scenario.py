import json

import flask_restful
from flask import request

from monkey_island.cc.resources.auth.auth import jwt_required


class SelectedScenario(flask_restful.Resource):

    scenario = {'id': 'zero_trust',
                'name': 'ZeroTrust',
                'description': 'scan zero trust security',
                'step': 1}
    # We only need to send relevant schema fields, everything else only set as default

    @jwt_required
    def get(self):
        # Return scenario brief here
        return self.scenario

    @jwt_required
    def post(self):
        # Set scenario here
        scenario_id = json.loads(request.data)['scenario_id']
        return self.scenario
