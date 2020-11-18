from monkey_island.cc.services.config_schema.basic import BASIC
from monkey_island.cc.services.config_schema.basic_network import BASIC_NETWORK
from monkey_island.cc.services.config_schema.definitions.definitions import DEFINITIONS
from monkey_island.cc.services.config_schema.internal import INTERNAL
from monkey_island.cc.services.config_schema.monkey import MONKEY

SCHEMA = {
    "title": "Monkey",
    "type": "object",
    "definitions": DEFINITIONS,
    "properties": {
        "basic": BASIC,
        "basic_network": BASIC_NETWORK,
        "monkey": MONKEY,
        "internal": INTERNAL,
    },
    "options": {
        "collapsed": True
    }
}
