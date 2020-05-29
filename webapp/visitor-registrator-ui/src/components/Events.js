import React, { Component } from 'react';
import Table from './Table.js';



class Events extends Component {

	state = {
		events: null,
	}
	
	componentDidMount() {
	    fetch('/api/v1/event')
	    .then(res => res.json())
	    .then((data) => {
	      this.setState({ events: data })
	    })
	    .catch(console.log)
	  }

	
	render() {
		if (this.state.events == null) {
			return (
	            <div>
					<h1>Events</h1>
					 <p>Loading data</p>
		            
	            </div>
			);
		} else if (this.state.events.length == 0) {
			return (
		            <div>
						<h1>Events</h1>
			            <p>No data found.</p>
		            </div>
				);
		} else {
			return (
				<div>
		            <h1>Events</h1>
		            <Table data={this.state.events}/>
	            </div>
			);
		}
	    
	}
	
}

export default Events;