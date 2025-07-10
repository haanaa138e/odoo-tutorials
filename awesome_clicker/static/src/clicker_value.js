import { Component } from "@odoo/owl";
import {useClicker} from "./use_clicker";
import { humanNumber } from "@web/core/utils/numbers";


export class ClickerValue extends Component {
	static template = "awesome_clicker.ClickerValue";
	static props = {};

	setup() {
			this.clicker= useClicker();
	}

	get humanizedClick() {
		return humanNumber(this.clicker.state.clicker,{
			decimals : 1,
		});
	}

}