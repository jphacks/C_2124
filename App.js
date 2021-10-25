import { render } from "./view/html-util.js";
import { TaskListView } from "./view/TaskListView.js";
import { TaskItemModel } from "./model/TaskItemModel.js";
import { TaskListModel } from "./model/TaskListModel.js";

export class App {
    constructor(localforage) {
        this.taskListView = new TaskListView();
        this.taskListModel = new TaskListModel([], localforage);
    }

    /**
     * Taskを追加するときに呼ばれるリスナー関数
     * @param {string} title
     */
    handleAdd(title) {
        this.taskListModel.addTask(new TaskItemModel({ title, completed: false }));
    }

    /**
     * Taskの状態を更新したときに呼ばれるリスナー関数
     * @param {{ id:number, completed: boolean }}
     */
    handleUpdate({ id, completed }) {
        this.taskListModel.updateTask({ id, completed });
    }

    /**
     * Taskを削除したときに呼ばれるリスナー関数
     * @param {{ id: number }}
     */
    handleDelete({ id }) {
        this.taskListModel.deleteTask({ id });
    }

    mount() {
        const formElement = document.querySelector("#js-form");
        const inputElement = document.querySelector("#js-form-input");
        const taskItemCountElement = document.querySelector("#js-task-count");
        const containerElement = document.querySelector("#js-task-list");

        this.taskListModel.onChange(() => {
            const taskItems = this.taskListModel.getTasks();
            console.log(taskItems);
            const taskListElement = this.taskListView.createElement(taskItems, {
                // Appに定義したリスナー関数を呼び出す
                onUpdateTask: ({ id, completed }) => {
                    this.handleUpdate({ id, completed });
                },
                onDeleteTask: ({ id }) => {
                    this.handleDelete({ id });
                }
            });
            render(taskListElement, containerElement);
            taskItemCountElement.textContent = `Taskアイテム数: ${this.taskListModel.getTotalCount()}`;
        });

        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            this.handleAdd(inputElement.value);
            inputElement.value = "";
        });

        // 最初からローカルに入っていたTodoを反映させる
        this.taskListModel.emitChange();
    }
}