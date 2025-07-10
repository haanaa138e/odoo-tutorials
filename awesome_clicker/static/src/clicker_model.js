import { Reactive } from "@web/core/utils/reactive";
import { EventBus } from "@odoo/owl";

export class ClickerModel extends Reactive{
	  constructor() {
		  super();
		  this.clicker = 0;
		  this.level = 0;
		  this.clickBots = 0;
		  this.bus = new EventBus();

		  document.addEventListener("click",() => this.increment(1),true);
		  setInterval(() => {
            this.clicker += this.clickBots * 10;
        }, 10000);
	  }


	  increment(inc){
		  this.clicker += inc;

		  if (this.level < 1 && this.clicker >= 1000) {
			  this.bus.trigger("MILESTONE_1k");
			  this.level++;
		  }
	  }


	  buyClickBot() {
		  const clickBotPrice = 1000;
		  if (this.clicker < clickBotPrice) {
			  return false;
		  }
		  this.clicker -= clickBotPrice;
		  this.clickBots += 1;
	  }

}
