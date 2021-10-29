import { element } from "./html-util.js";
import { TaskItemView } from "./TaskItemView.js";

export class TaskListView {
    /**
     * `taskItems`に対応するTaskリストのHTML要素を作成して返す
     * @param {TaskItemModel[]} taskItems TaskItemModelの配列
     * @param {function({id:string, completed: boolean})} onUpdateTask チェックボックスの更新イベントリスナー
     * @param {function({id:string})} onDeleteTask 削除ボタンのクリックイベントリスナー
     * @returns {Element} TaskItemModelの配列に対応したリストのHTML要素
     */
    createElement(taskItems, { onUpdateTask, onDeleteTask }) {
        const taskListElement = element`<ul />`;
        // 各TaskItemモデルに対応したHTML要素を作成し、リスト要素へ追加する
        taskItems.forEach(taskItem => {
            const taskItemView = new TaskItemView();
            const taskItemElement = taskItemView.createElement(taskItem, {
                onDeleteTask,
                onUpdateTask
            });
            taskListElement.appendChild(taskItemElement);
        });
        return taskListElement;
    }
}