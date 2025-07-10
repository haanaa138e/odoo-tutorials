import { registry } from  "@web/core/registry";
import { Component } from "@odoo/owl";
import {useClicker} from "./use_clicker";
import { ClickerValue } from "./clicker_value"

class ClickerClientAction extends Component {
	 static template = "awesome_clicker.ClickerClientAction";
	 static props = ["*"];
	 static components = {ClickerValue};

    setup() {
		this.clicker= useClicker();
    }

}

registry.category("actions").add("awesome_clicker.client_action", ClickerClientAction);







