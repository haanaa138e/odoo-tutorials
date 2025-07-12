import { Reactive } from "@web/core/utils/reactive";
import { EventBus } from "@odoo/owl";

export class ClickerModel extends Reactive{
	  constructor() {
		  super();
		  this.clicker = 0;
		  this.level = 0;
		  this.bus = new EventBus();
		  this.bots = {
			  clickbot: {
				  price: 1000,
				  level: 1,
				  increment: 10,
				  purchased: 0,
			  },
			  bigbot: {
				  price: 5000,
				  level: 2,
				  increment: 100,
				  purchased: 0,
			  }
		  }
		  this.multiplier = 1

		  document.addEventListener("click",() => this.increment(1),true);
		  setInterval(() => {
            for (const bot in this.bots) {
				this.clicker += this.bots[bot].increment * this.bots[bot].purchased * this.multiplier;
            }
        }, 10000);
	  }

	  buyMultiplier() {
		  if (this.clicker < 50000) {
			  return false;
		  }
		  this.clicker -= 50000;
		  this.multiplier++;
	  }


	  increment(inc){
		  this.clicker += inc;
		   if (
			   this.milestones[this.level] &&
			   this.clicker >= this.milestones[this.level].clicks
        ) {
			   this.bus.trigger("MILESTONE", this.milestones[this.level]);
			   console.log("🚀 Milestone triggered!", this.milestones[this.level]);
			   this.level += 1;
		 }
	  }


	  buyBot(name) {
		  if (!Object.keys(this.bots).includes(name)) {
			  throw new Error(`Invalid bot name ${name}`);
		  }
		  if (this.clicker < this.bots[name].price) {
			  return false;
		  }
		  this.clicker -= this.bots[name].price;
		  this.bots[name].purchased += 1;
	  }

    get milestones() {
	    return [
		    {clicks: 1000, unlock: "clickbot"},
		    {clicks: 5000, unlock: "bigbot"},
		    {clicks: 10000, unlock: "multiplier"},
	    ];
    }
}
