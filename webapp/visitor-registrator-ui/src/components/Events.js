import React, { Component, Button } from 'react';
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

	addEvent() {
		
	}
	
	render() {
		let table = null;
		if (this.state.events == null) {
			table =  (<p>Loading data...</p>);
		} else if (this.state.events.length == 0) {
			table =  (<p>No data found.</p>);
		} else {
			table =  (<Table data={this.state.events}/>);
		}
		return (
	            <div>
					<h1>Events</h1>
					{table} 
				    <button variant="primary" onClick={this.addEvent}>
				      Add Event
				    </button>
	            </div>
			);
	}
	
}

export default Events;