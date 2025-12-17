/** @odoo-module **/
import { reactive } from "@odoo/owl";

export const todoStore = reactive({
    tasks: reactive([]),

    get allTasks() {
        return this.tasks;
    },

    get total() {
        return this.tasks.length;
    },

    get done() {
        return this.tasks.filter(t => t.is_done).length;
    },

    get pending() {
        return this.tasks.filter(t => !t.is_done).length;
    },
});
