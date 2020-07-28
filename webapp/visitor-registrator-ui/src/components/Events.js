import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import DateHelper from '../util/DateHelper';
import Moment from 'react-moment';
import 'moment-timezone';


class Events extends Component {

	constructor() {
		super();
		this.clonedEvents = [];
	}

	state = {
		events: [],
	}

	componentDidMount() {
		this.loadEvents();
	}

	loadEvents = () => {
		fetch('/api/v1/event')
			.then(res => res.json())
			.then((data) => {
				this.setState({ events: data })
			})
			.catch(console.log);
	}

	saveEvent(event) {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(event)
		};
		fetch('/api/v1/event', requestOptions)
			.then(this.loadEvents)
			.catch(console.log);
	}

	onEditorValueChange(props, value) {
		let updatedEvents = [...this.state.events];
		updatedEvents[props.rowIndex][props.field] = value;
		this.setState({ events: updatedEvents });
	}

	nameEditor = (props) => {
		return (
			<InputText type="text" value={this.state.events[props.rowIndex]['name']} onChange={(e) => this.onEditorValueChange(props, e.target.value)} />
		);
	}

	numberOfSeatsEditor = (props) => {
		return (
			<InputText type="text" keyfilter="pnum" value={this.state.events[props.rowIndex]['numberOfSeats']} onChange={(e) => this.onEditorValueChange(props, e.target.value)} />
		);
	}

	startDateTimeEditor = (props) => {
		var dateHelper = new DateHelper();
		return (
			<Calendar dateFormat="yy-mm-dd" showTime={true} showSeconds={true} hourFormat="24" value={dateHelper.isoStringToDate(this.state.events[props.rowIndex]['startDateTime'])} onChange={(e) => this.onEditorValueChange(props, dateHelper.dateToIsoString(e.target.value))} />
		)
	}

	requiredValidator(props) {
		let value = props.rowData[props.field];
		return value && value.length > 0;
	}

	onRowEditInit = (editEvent) => {
		this.clonedEvents[editEvent.data.sysid] = { ...editEvent.data };
	}

	onRowEditSave = (event) => {
		if (this.onRowEditorValidator(event.data)) {
			this.saveEvent(event.data);
			delete this.clonedEvents[event.data.sysid];
			// Success message
		}
		else {
			// Error message
		}
	}

	onRowEditCancel = (editEvent) => {
		let events = [...this.state.events];
		events[editEvent.index] = this.clonedEvents[editEvent.data.sysid];
		delete this.clonedEvents[editEvent.data.sysid];
		this.setState({
			events
		})
	}

	onRowEditorValidator = (data) => {
		return true;
	}

	dateAccessor = (d) => {
          return Moment(d.updated_at)
            .local()
            .format("DD-MM-YYYY hh:mm:ss a")
    }

	render() {
		return (
			<div>
				<h1>Event Overview</h1>
				<DataTable value={this.state.events} emptyMessage="No data found" editMode="row" onRowEditInit={this.onRowEditInit} onRowEditSave={this.onRowEditSave} onRowEditCancel={this.onRowEditCancel}>
					<Column field="sysid" header="ID" sortable="true" />
					<Column field="sysinsertts" header="Insert timestamp" sortable="true" />
					<Column field="name" header="Event name" sortable="true" editor={this.nameEditor} editorValidator={this.requiredValidator} />
					<Column field="numberOfSeats" header="Number of Seats" sortable="true" editor={this.numberOfSeatsEditor} editorValidator={this.requiredValidator} />
					<Column field="startDateTime" header="Start time" sortable="true" editor={this.startDateTimeEditor} editorValidator={this.requiredValidator} />
					<Column rowEditor={true} />
				</DataTable>
			</div>
		)
	}
};

export default Events;