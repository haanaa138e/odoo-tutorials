/** @odoo-module */

import { Component, onWillStart, useRef, onMounted, onWillUnmount } from "@odoo/owl";
import { loadJS } from "@web/core/assets";


export class PieChart extends Component {
    static template = "awesome_dashboard.PieChart";

    static props = {
        label: String,
        data: Object,
	    onClick: Function,
    };

    setup() {
        this.canvasRef = useRef("canvas");
        onWillStart(() => loadJS(["/web/static/lib/Chart/Chart.js"]));
        onMounted(() => {
            this.renderChart();
        });
        onWillUnmount(() => {
            this.chart.destroy();
        });
    }

    renderChart() {
        const labels = Object.keys(this.props.data);
        const data = Object.values(this.props.data);
	    const colorMap = {
		    s: "#FC9611",
		    m: "#257BFD",
		    xl: "#95BCF5",
	    };
		const color = labels.map(label => colorMap[label] );
        this.chart = new Chart(this.canvasRef.el, {
            type: "pie",
            data: {
                labels: labels,
                datasets: [
                    {
                        label: this.props.label,
                        data: data,
                        backgroundColor: color,
                    },
                ],
            },
	        options: {
                onClick: (event, elements) => {
                    if (elements.length > 0 && this.props.onClick) {
                        this.props.onClick();
                    }
                }
            },
        });
    }
}