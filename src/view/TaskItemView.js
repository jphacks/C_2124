import { element } from "./html-util.js";

export class TaskItemView {
    /**
     * `taskItem`に対応するTaskアイテムのHTML要素を作成して返す
     * @param {TaskItemModel} taskItem
     * @param {function({id:string, completed: boolean})} onUpdateTask チェックボックスの更新イベントリスナー
     * @param {function({id:string})} onDeleteTask 削除ボタンのクリックイベントリスナー
     * @returns {Element}
     */
    createElement(taskItem, { onUpdateTask, onDeleteTask }) {
        const taskItemElement = taskItem.completed
            ? element`<li><input type="checkbox" class="checkbox" checked>
                                    <s>${taskItem.title}</s>
                                    <button class="delete">x</button>
                                </li>`
            : element`<li><input type="checkbox" class="checkbox">
                                    ${taskItem.title}
                                    <button class="delete">x</button>
                                </li>`;
        const inputCheckboxElement = taskItemElement.querySelector(".checkbox");
        inputCheckboxElement.addEventListener("change", () => {
            // コールバック関数に変更
            onUpdateTask({
                id: taskItem.id,
                completed: !taskItem.completed
            });
        });
        const deleteButtonElement = taskItemElement.querySelector(".delete");
        deleteButtonElement.addEventListener("click", () => {
            // コールバック関数に変更
            onDeleteTask({
                id: taskItem.id
            });
        });
        // 作成したTaskアイテムのHTML要素を返す
        return taskItemElement;
    }
}