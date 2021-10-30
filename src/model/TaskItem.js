import React from "react";
export class TaskItem extends React.Component{
    // ユニークなIDを管理する変数
    static taskIdx = 0;

    /**
     * @param {string} title Taskアイテムのタイトル
     * @param {boolean} completed Taskアイテムが完了済みならばtrue、そうでない場合はfalse
     */
    constructor({ title, completed }) {
        super();
        // idは自動的に連番となりそれぞれのインスタンスごとに異なるものとする
        this.id = TaskItem.taskIdx++;
        this.title = title;
        this.completed = completed;
    }

    render() {
        return (
            <li><input type="checkbox" class="checkbox" checked></input>
                <s>{this.title}</s>
                <button class="delete">x</button>
                <label onDoubleClick={this.handleEdit}>
                {this.task.title}
                </label>
                
            </li>
            );

        //         <li className={classNames({
        //     completed: this.props.todo.completed,
        //     editing: this.props.editing
        // })}>
        // <li className="task">
        //     <div className="view">
        //         <input
        //             className="toggle"
        //             type="checkbox"
        //             checked={this.props.todo.completed}
        //             onChange={this.props.onToggle}
        //         />
        //         <label onDoubleClick={this.handleEdit}>
        //             {this.props.todo.title}
        //         </label>
        //         <button className="destroy" onClick={this.props.onDestroy} />
        //     </div>
        //     <input
        //         ref="editField"
        //         className="edit"
        //         value={this.state.editText}
        //         onBlur={this.handleSubmit}
        //         onChange={this.handleChange}
        //         onKeyDown={this.handleKeyDown}
        //     />
        // </li>);
    }

}