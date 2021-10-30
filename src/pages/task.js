import React from "react";


export class Task extends React.Component{

    onClick() {
        const MAX = this.props.task.MAX_VALUE;
        const donerate = this.props.task.INC_PROGRESS + this.props.task.progress;

        if(donerate >= MAX){
            this.props.task.progress = MAX;
            this.props.task.completed = true;
        } else {
            this.props.task.progress = donerate;
        }
    }

    render() {
        console.log(this.props.task);
        return (
            <li>
                {/* <input type="checkbox" class="checkbox" checked></input> */}
                <s>{this.props.task.title}</s>
                <button onClick={this.onClick()}>{this.props.task.progress}</button>
                {this.props.task.title}　
                {this.props.task.min}分　
                {this.props.task.mental}
                {this.props.task.mental}
                <button class="delete">x</button>
                
                {/* <label onDoubleClick={this.handleEdit}>
                { {this.mental}
                {this.progress} }
                </label> */}
                
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
};