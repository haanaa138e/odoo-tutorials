/** @odoo-module */

import { Component } from "@odoo/owl";
import { PieChart } from "../pie_chart/pie_chart";
import { useService } from "@web/core/utils/hooks";

export class PieChartCard extends Component {
    static template = "awesome_dashboard.PieChartCard";
    static components = { PieChart }
    static props = {
        title: {
            type: String,
        },
        values: {
            type: Object,
        },
    }
	 setup() {
        this.action = useService("action");
    }

   openSaleOrders() {
    this.action.doAction("sale.action_orders");
	}

}
