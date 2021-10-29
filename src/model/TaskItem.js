export class TaskItem {
    // ユニークなIDを管理する変数
    static taskIdx = 0;

    /**
     * @param {string} title Taskアイテムのタイトル
     * @param {boolean} completed Taskアイテムが完了済みならばtrue、そうでない場合はfalse
     */
    constructor({ title, completed }) {
        // idは自動的に連番となりそれぞれのインスタンスごとに異なるものとする
        this.id = TaskItem.taskIdx++;
        this.title = title;
        this.completed = completed;
    }
}