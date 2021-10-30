import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { TaskModel } from './model/TaskModel';
import reportWebVitals from './reportWebVitals';

export const model = new TaskModel();

(function () {
  function render() {
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      document.getElementById('taskapp')
    );  
  }
  
  model.subscribe(render);  
  render();
})();

reportWebVitals();