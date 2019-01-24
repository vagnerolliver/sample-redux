import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './store/reducers'
import App from './containers/App';

import { requestAllCourses } from "./store/actions/actions";
import './index.css';

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

store.dispatch(requestAllCourses())

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

