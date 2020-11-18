import flask_restful

from monkey_island.cc.resources.auth.auth import jwt_required


class ScenarioList(flask_restful.Resource):

    scenarios_list = [
        {'id': 'zero_trust', 'name': 'ZeroTrust', 'description': 'scan zero trust security', 'important': True},
        {'id': 'attack', 'name': 'ZTT&CK', 'description': 'scan attack scenarios', 'important': True},
        {'id': 'cloud_security', 'name': 'Cloud security', 'description': 'scan cloud security', 'important': False},
        {'id': 'credential_leak', 'name': 'Credential leak', 'description': 'test impact of leaked credentials', 'important': False},
        {'id': 'else', 'name': 'Something else', 'description': 'scan zero trust security', 'important': False},
        {'id': 'quick_run', 'name': 'Quick run', 'description': 'Run now with default configuration', 'important': False},
        {'id': 'expert_mode', 'name': 'Expert Mode', 'description': 'Fine tune everything', 'important': False}
    ]

    @jwt_required
    def get(self):
        return {'scenario_list': ScenarioList.scenarios_list}
