import { registry } from "@web/core/registry";
import {ClickerModel} from "./clicker_model";

const clickerService = {

	dependencies: ["effect"],
    start(env, services) {
        const clickerModel = new ClickerModel();
        const bus = clickerModel.bus
        bus.addEventListener("MILESTONE", (ev) => {
			console.log("🌈 Got milestone event!", ev.detail);
            services.effect.add({
	            message: `Milestone reached! You can now buy ${ev.detail.unlock}`,
                type: "rainbow_man",
            });
        },1000);
        return clickerModel;
    },
};

registry.category("services").add("awesome_clicker.clicker", clickerService);