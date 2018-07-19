import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import TodoList from './TodoList';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('wrap')
);
