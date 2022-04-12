import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

const initialState = {
  entities: []
}

const reducer = (state = initialState, action) => {
  console.log({ action, state })
  switch (action.type) {
    case "todo/add": {
      return {
        ...state, entities: state.entities.concat({ ...action.payload })
      }
    }
    case "todo/complete": {
      const newTodos = state.entities.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
      return {
        ...state,
        entities: newTodos
      }
    }    
    default:
      return state
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
