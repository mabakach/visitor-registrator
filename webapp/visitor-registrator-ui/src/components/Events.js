import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import { Button } from 'react-bootstrap';
 
const columns2 = [
	{
	name: 'ID',
	selector: 'sysid',
	sortable: true,
	compact: true,
	},
	{
	name: 'Insert timestamp',
	selector: 'sysinsertts',
	sortable: true,
	compact: true,
	},
	{
	name: 'Event name',
	selector: 'name',
	sortable: true,
	},
	{
	name: 'Number of seats',
	selector: 'numberOfSeats',
	sortable: true,
	right: true,
	},
	{
	name: 'Start time',
	selector: 'startDateTime',
	sortable: true,
	compact: true,
	},
	
	];

class Events extends Component {
	state = {
			events: [],
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
		const tableActions = <Button>New Event</Button>;
		return (
				<div>
					
						<DataTable
							title="Events"
							actions={tableActions}
							columns={columns2}
							data={this.state.events}
						/>
				</div>
		)
	}
};

export default Events;