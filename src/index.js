import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Auth from './Auth'
import * as serviceWorker from './serviceWorker';

const auth = new Auth()

let state = {}
window.setState = (change) => {
    state = Object.assign({}, state, change);
    ReactDOM.render(<App {...state} />, document.getElementById('root'));
};
let username = auth.getProfile().given_name || "Guest";

let initialState = {
    name: username,
    location: window.location.pathname.replace(/^\/?|\/$/g, ""),
    auth
};
window.setState(initialState);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
