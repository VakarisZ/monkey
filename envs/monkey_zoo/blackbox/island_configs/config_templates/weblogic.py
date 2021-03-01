from envs.monkey_zoo.blackbox.island_configs.config_templates.base_template import BaseTemplate
from envs.monkey_zoo.blackbox.island_configs.config_templates.config_template import ConfigValueDescriptor


class Weblogic(BaseTemplate):

    @staticmethod
    def should_run(class_name: str) -> bool:
        return True

    config_value_list = [
        ConfigValueDescriptor("basic.exploiters.exploiter_classes", ["WebLogicExploiter"]),
        ConfigValueDescriptor("basic_network.scope.subnet_scan_list",
                              ["10.2.2.18",
                               "10.2.2.19"])
    ]
