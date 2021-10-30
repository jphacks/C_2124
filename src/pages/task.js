import React from "react";
export class Task extends React.Component{


    render() {
        console.log(this.props.task);
        return (


            <div class="columns is-mobile">
            {/* <input type="checkbox" class="checkbox" checked></input> */}
            　  <div class="card bd-notification is-info">　{this.props.task.title}　
                </div>
                <div class="card has-background-primary">　{this.props.task.min} minutes.　</div>
                <div class="card has-background-warning" >　{this.props.task.mental}　</div>
                {/* <a class="column">Proceed</a> */}

                <button class="delete">x</button>
                                {/* <label onDoubleClick={this.handleEdit}>
                { {this.mental}
                {this.progress} }
                </label> */}
　               </div>
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