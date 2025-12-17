/** @odoo-module **/
import { Component } from "@odoo/owl";
import { TaskItem } from "./task_item";


export class TaskList extends Component {
    static template = "odoo_todo_owl.TaskList";
    
    static components = { TaskItem };

    setup() {
    }

    static props = {
        tasks: Array,
        onToggle: Function,
        onDelete: Function,
    };
}
