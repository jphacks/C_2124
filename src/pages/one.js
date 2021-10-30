import React from 'react';
import { Link } from 'react-router-dom';
import Two from './two.js';
import Analysis from './analysis';
import { Task } from './task.js';

class One extends React.Component{
    render(){

      console.log("now display one");

      let tasks = this.props.model.items;

      let taskItems = tasks.map(function(task) {
      return (
        <Task
          key={task.id}
          task={task}          
        />
      );
      }, this);

        return (
            <div className="container">
                <input
                  id="js-form-input"
                  className="new-task"
                  type="text"
                  value={this.props.state.title}
                  onChange={(event) => this.props.app.handleTitleChange(event)}
                  onKeyDown={(event) => this.props.app.handleNewTodoKeyDown(event)}
                  placeholder="Your task."
                  autoComplete="off"
                />
                <input type="text" 
                  size="3"
                  placeholder="min"
                  value={this.props.state.min}
                  onChange={(event) => this.props.app.handleMinChange(event)}
                />
              <select name="mental-barrier"
                  value={this.props.state.mental}
                  onChange={(event) => this.props.app.handleMentalBarrierChange(event)}
                >
                <option value="1">心理的障壁は無い(1)</option>
                <option value="2">少し頑張れば出来る(2)</option>
                <option value="3">気合が欲しい(3)</option>
                <option value="4">覚悟が必要(4)</option>
              </select>
              <a class="control">
              <a class="button has-background-info"><i class="fa fa-search"></i>追加</a></a>
              <div id="js-task-list" className="task-list">
              </div>
              <footer className="footer">
                {taskItems}
                <span id="js-task-count">残りのTodo数: {this.props.model.getTotalCount()}<br/>{this.props.test}</span>
              </footer>
            </div>
        )
    } 
}

export default One;