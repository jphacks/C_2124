import React from 'react';
import { Link } from 'react-router-dom';
import Two from './two.js';
import Analysis from './analysis';

class One extends React.Component{
    render(){
        return (
            <div className="container ">
              <form id="js-form">
                <input
                  id="js-form-input"
                  className="new-task"
                  type="text"
                  placeholder="What need to be done?"
                  autoComplete="off"
                />
              </form>
              <div id="js-task-list" className="task-list">
              </div>
              <footer className="footer">
                <span id="js-task-count">Todoアイテム数: 0</span>
              </footer>
                test_one<br/>
                <Link to='/two'>twoへ</Link> 
                test_two<br/>
                <Link to='/analysis'>analへ</Link> 
            </div>
        )
    } 
}

export default One;