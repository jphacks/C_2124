import { EventEmitter } from "../EventEmitter.js";
import {LocalForageModel} from "./LocalForageModel.js";

export class TaskListModel extends EventEmitter {
  /**
   * 
   * @param {TaskListItem[]} items 
   * @param {localforage} localforage 
   * localforage[] = {title : string, completed : boolean}
   */
  constructor(items = []) {
    super();
    this.items = items;
    this.l = new LocalForageModel();
    items = this.l.toTaskList();
    console.log('tasklistmodel items is ' + items);
  }

  getTotalCount() {
    return this.items.length;
  }

  getTasks() {
    return this.items;
  }

  /**
   * TaskListの状態が更新されたときに呼び出されるリスナー関数を登録する
   * @param {Function} listener
   */
  onChange(listener) {
    this.addEventListener("change", listener);
  }

  /**
   * 状態が変更されたときに呼ぶ。登録済みのリスナー関数を呼び出す
   */
  emitChange() {
    this.emit("change");
  }

  /**
   * TaskItemを追加する
   * @param {TaskItemModel} taskItem
   */
  addTask(taskItem) {
    this.items.push(taskItem);
    this.l.add(taskItem);
    this.emitChange();
  }
  /**
   * 指定したidのTaskItemのcompletedを更新する
   * @param {{ id:number, completed: boolean }}
   */
  updateTask({ id, completed }) {
    // `id`が一致するTaskItemを見つけ、あるなら完了状態の値を更新する
    const taskItem = this.items.find((task) => task.id === id);
    if (!taskItem) {
      return;
    }
    taskItem.completed = completed;
    this.l.update(`${id}`, completed);

    this.emitChange();
  }

  /**
   * 指定したidのTaskItemを削除する
   * @param {{ id: number }}
   */
  deleteTask({ id }) {
    // `id`に一致しないTaskItemだけを残すことで、`id`に一致するTaskItemを削除する
    this.items = this.items.filter((task) => {
      return task.id !== id;
    });
    this.l.delete(`${id}`);

    this.emitChange();
  }
}
