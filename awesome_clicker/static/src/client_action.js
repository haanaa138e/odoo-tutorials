import { registry } from  "@web/core/registry";
import { Component } from "@odoo/owl";
import {useClicker} from "./use_clicker";


class ClickerClientAction extends Component {
	 static template = "awesome_clicker.ClickerClientAction";
	 static props = ["*"];


    setup() {
		this.clicker= useClicker();
    }

}

registry.category("actions").add("awesome_clicker.client_action", ClickerClientAction);







