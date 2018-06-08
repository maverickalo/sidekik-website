import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Testamonials from './components/Testamonials';
import Contact from './components/Contact';
import ExtraHeader from './components/ExtraHeader';
import ServicesDetails from './components/ServicesDetails';
import './App.css'

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Route exact path="/" component={Header} />
					<Route exact path="/" component={About} />
					<Route exact path="/" component={Services} />
					<Route exact path="/" component={Testamonials} />
					<Route exact path="/" component={Contact} />
					<Route path="/services" component={ExtraHeader} />
					<Route path="/services" component={ServicesDetails} />
				</div>
			</Router>
		);
	}
}

export default App;
