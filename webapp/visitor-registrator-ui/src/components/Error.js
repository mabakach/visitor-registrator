import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';


class Error extends Component {
	render() {
	    return (
		      <Alert variant="danger" dismissible>
		        <Alert.Heading>Something went wrong!</Alert.Heading>
		        <p>
		          Please try again!
		        </p>
		      </Alert>
	    );
	}
	
}

export default Error;