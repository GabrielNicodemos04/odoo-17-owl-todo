/** @odoo-module **/
import { Component } from "@odoo/owl";
import { todoStore } from "../store/todo_store";

export class TodoHeader extends Component {
    static template = "odoo_todo_owl.TodoHeader";

    setup() {
        this.store = todoStore;
    }
}