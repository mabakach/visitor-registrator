import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';

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
		let cols = [
            {field: 'sysid', header: 'ID'},
            {field: 'sysinsertts', header: 'Insert timestamp'},
            {field: 'name', header: 'Event name'},
            {field: 'numberOfSeats', header: 'Number of Seats'},
			{field: 'startDateTime', header: 'Start time'}

        ];
		let dynamicColumns = cols.map((col,i) => {
            return <Column key={col.field} field={col.field} header={col.header} />;
        });
		return (
				<DataTable value={this.state.events}>
					{dynamicColumns}
				</DataTable>
		)
	}
};

export default Events;