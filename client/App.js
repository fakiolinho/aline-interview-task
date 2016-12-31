import React from 'react';
import ReactDOM from 'react-dom';

import Application from './components/Application.jsx';
import Home from './components/home.jsx';
import Users from './components/users.jsx';
import Contact from './components/contact.jsx';
import Login from './components/login.jsx';

import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';


ReactDOM.render((
    <Provider store={store}>
	    <Router history={history}>
			<Route path = "/" component = {Application}>
				<IndexRoute component = {Home} />
				<Route path = "users" component = {Users} />
				<Route path = "contact" component = {Contact} />
				<Route path = "login" component = {Login} />
			</Route>
		</Router>
	</Provider>
), document.getElementById('app'));