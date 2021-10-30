import React from 'react';
import { Route, Switch, withRouter, Link } from 'react-router-dom';
import One from './pages/one.js';
import Two from './pages/two.js';
import Analysis from './pages/analysis.js';

// import { render } from "./view/html-util.js";
// import { TaskListView } from "./view/TaskListView.js";
import { TaskItem } from "./model/TaskItem.js";
import { TaskModel } from "./model/TaskModel.js";

const ENTER_KEY = 13;
export class App extends React.Component{
  

  constructor(localforage) {
    super();
//      this.taskListView = new TaskListView();
      this.model = new TaskModel([], localforage);
      this.onChanges = [];
      this.setState = this.setState.bind(this);
      this.state = {
        editing: null,
        title: '',
        completed: false,
        min: 0,
        mental: 0,
        progress: 0,
      }
  }

  /*  constructorの後に呼ばれる */
//   componentDidMount() {
//    setState = this.setState;
//   }

  /**
   * Taskを追加するときに呼ばれるリスナー関数
   * @param {string} title
   */
//   handleAdd(title) {
//       this.model.addTask(new TaskItem({ title: title, completed: false }));
//   }

  /**
   * Taskの状態を更新したときに呼ばれるリスナー関数
   * @param {{ id:number, completed: boolean }}
   */
  handleUpdate({ id, completed }) {
      this.model.updateTask({ id, completed });
      
  }

  /**
   * inputに入力された内容を検知するためのリスナー関数
   */
  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  handleMinChange(event) {
    this.setState({min: event.target.value});
  }

  handleMentalBarrierChange(event) {
    this.setState({mental: event.target.value});
  }


  handleNewTodoKeyDown(event) {
      if (event.keyCode !== ENTER_KEY) {
          return;
      }
      console.log('enter!!');

      event.preventDefault();

      const title = this.state.title.trim();
      const completed = false;
      const min = this.state.min ? this.state.min : 3;
      const mental = this.state.mental;
      if (title) {
          this.model.addTask({title, completed, min, mental});
          this.setState({newTodo: ''});
      }
  };

  /**
   * Taskを削除したときに呼ばれるリスナー関数
   * @param {{ id: number }}
   */
  handleDelete({ id }) {
      this.model.deleteTask({ id });
  }

  render() {

    const footer = (function(){
        return (
            <div>
                <Link to='/two'>タスクリスト　</Link>
                <Link to='/'>今日　</Link> 
                <Link to='/analysis'>分析　</Link>
            </div>
        );
    }());

    return (
        <div>
      <Switch>
        <Route
            path = '/'
            exact = {true}
            render = {()=> <
                One 
                test={this.model.test}
                model={this.model}
                app={this}
                state={this.state}
                /> }
        />
        <Route
            path = '/two'
            render = {()=><
                Two
                model={this.model}
                /> }
        />
        <Route
            path = '/analysis'
            render = {()=><
                Analysis
                model={this.model}
                /> }
        />
       </Switch>
       {footer}
       </div>       
    );
  }
}

export default withRouter(App);