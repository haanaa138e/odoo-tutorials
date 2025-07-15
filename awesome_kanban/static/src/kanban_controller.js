import {KanbanController } from "@web/views/kanban/kanban_controller";
import { CustomerList } from "./customer_list";

export class AwesomeKanbanController extends KanbanController {
	static components = { ...KanbanController.components, CustomerList}
    static template = "awesome_kanban.AwesomeKanbanController";

    setup() {
        super.setup();
		this.searchKey = Symbol("isFromAwesomeKanban");
    }

    selectCustomer(partner_id,partner_name) {
		const customerFilters = this.env.searchModel.getSearchItems((searchItem) =>
            searchItem.isFromAwesomeKanban
		);

		for (const customerFilter of customerFilters) {
            if (customerFilter.isActive) {
                this.env.searchModel.toggleSearchItem(customerFilter.id);
            }
		}
        this.env.searchModel.createNewFilters([{
	        description: partner_name,
	        domain: [["partner_id", "=", partner_id]],
	        isFromAwesomeKanban: true,
		}])
    }
}
