import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './components/app';

const store = createStore(rootReducer);
class TodoApp extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
export default TodoApp;
