import { registry } from "@web/core/registry";
import { memoize } from "@web/core/utils/functions";
import { rpc } from "@web/core/network/rpc";

const fetchStatistics = memoize(() => rpc("/awesome_dashboard/statistics"));

export const statisticsService = {
    async: ["loadStatistics"],
    start() {
        return {
            loadStatistics: () => fetchStatistics(),
        };
    },
};

registry.category("services").add("awesome_dashboard.statistics", statisticsService);
