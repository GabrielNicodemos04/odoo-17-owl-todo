/** @odoo-module **/
import { Component } from "@odoo/owl";

export class TaskItem extends Component {
    static template = "odoo_todo_owl.TaskItem";

    static props = {
        task: Object,
        onToggle: Function,
        onDelete: Function,
    };

    setup() {
    }
}
