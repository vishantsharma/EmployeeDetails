import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Layout from './layout/Layout';
import Login from './login/Login';
import EmpDetails from './details/EmpDetails';

class App extends Component {
	render() {
		return(
			<Router history={hashHistory}>
				<Route path="/" component={Layout}>
					<IndexRoute component={Login}></IndexRoute>
					<Route path="details" component={EmpDetails}></Route>
				</Route>
			</Router>
			)
	}
}

export default App;