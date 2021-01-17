import React from 'react'
import ReactDom from 'react-dom'
//synchronously dispatch actions, update the state by calling the 
//root reducer function and notify the UI that something has changed

//user event -> call dispatch() -> pass in something -> Middleware -> API -> Dispatch -> reducer -> state -> UI
  //plain action object, function, or some value that middleware can look for
  //once dispatch reaches middleware it makes an async call
//all asynchronous stuff happens outside the store

//going to keep track of global state store from anywhere in the app
import { Provider } from 'react-redux'

//redux middleware were designed to enable writing logic that has side effects
  //code that changes state/behavior outside a function (like AJAX calls)
import { createStore, applyMiddleware, compose } from 'redux'

//official async middleware of redux
//lets us pass functions to dispatch
//receives dispatch and getState as arguments and can dispatch actions
import thunk from 'redux-thunk'

import reducers from './reducers'
import App from './App'
import './index.css'

//stores only know how to synchronously dispatch actions
const store = createStore(reducers, compose(applyMiddleware(thunk)))

//wrapped in provider to give access to hooks and the store (useDispatch, useSelector)
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'))