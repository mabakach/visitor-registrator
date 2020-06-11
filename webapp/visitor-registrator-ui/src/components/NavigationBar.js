import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

class NavigationBar extends Component {
	render() {
		return (
				<Navbar bg="light" expand="lg">
				  <Navbar.Brand href="/">Visitor Registrator</Navbar.Brand>
				  <Navbar.Toggle aria-controls="basic-navbar-nav" />
				  <Navbar.Collapse id="basic-navbar-nav">
				    <Nav className="mr-auto">
				      <Nav.Link href="/">Home</Nav.Link>
				      <Nav.Link href="/events">Events</Nav.Link>
				      <Nav.Link href="/about">About</Nav.Link>
				    </Nav>
				  </Navbar.Collapse>
				</Navbar>
		)
	}
}
export default NavigationBar;