/** @odoo-module **/
import { Component, useState, onWillStart } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
import { TaskList } from "./task_list";
import { todoStore } from "../store/todo_store";
import { TodoHeader } from "./todo_header";



export class TodoOwlApp extends Component {
    static template = "odoo_todo_owl.TodoOwlApp";
    static components = { TaskList, TodoHeader };

    setup() {
        this.orm = useService("orm");
        this.store = todoStore;

        this.state = useState({
            newTask: "",
        });

        onWillStart(async () => {
            await this.loadTasks();
        });
    }

    

    async loadTasks() {
        const tasks = await this.orm.searchRead(
            "todo.task",
            [],
            ["id", "name", "is_done"]
        );

        this.store.tasks.splice(0, this.store.tasks.length, ...tasks);
        console.log("Loaded tasks:", this.store.tasks);
    }

    async addTask() {
        if (!this.state.newTask.trim()) return;

        // Adicionar no banco de dados odoo via ORM service
        const [id] = await this.orm.create("todo.task", [{
            name: this.state.newTask,
            is_done: false,
        }]);

        this.store.tasks.unshift({
            id,
            name: this.state.newTask,
            is_done: false,
        });

        this.state.newTask = "";
    }

    removeTask = async (taskId) => {
        console.log("Removing task:", taskId);
        
        await this.orm.unlink("todo.task", [taskId]);
        const index = this.store.tasks.findIndex(task => task.id === taskId);
        if (index !== -1) {
            this.store.tasks.splice(index, 1);
        }
    };

    toggleDone = async (task) => {
        console.log("Toggling task:", task);

        await this.orm.write("todo.task", [task.id], {
            is_done: !task.is_done,
        });

        const index = this.store.tasks.findIndex(t => t.id === task.id);
        if (index !== -1) {
            this.store.tasks[index].is_done = !this.store.tasks[index].is_done;
        }
    };

}

// REGISTRO DA ACTION
registry.category("actions").add("todo_owl_app", TodoOwlApp);
