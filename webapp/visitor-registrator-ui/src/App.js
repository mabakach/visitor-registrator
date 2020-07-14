//import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Error from './components/Error';
import NavigationBar from './components/NavigationBar';

import './App.css';

class App extends Component {
  render() {
    return (      
	   <BrowserRouter>
	    <div>
	      <NavigationBar />
	      	<div class="m-3">
		      	<Switch>
			        <Route path="/" component={Home} exact/>
					<Route path="/events" component={Events}/>
					<Route path="/about" component={About}/>
					<Route component={Error}/>
				</Switch>
			</div>
	    </div> 
	  </BrowserRouter>
    );
  }
}
 
export default App