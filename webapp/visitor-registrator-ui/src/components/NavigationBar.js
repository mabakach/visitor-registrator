import React, { Component } from 'react';
import {MegaMenu} from 'primereact/megamenu';

const items =
[
    {
        label: 'Home',
        icon: 'pi pi-home',
        command: (e) => {
            window.location = "/";
        }
    },
    {
        label: 'Events',
        command: (e) => {
            window.location = "/events";
        }
    },
	{
        label: 'About',
        command: (e) => {
            window.location = "/about";
        }
    }
];

class NavigationBar extends Component {
	render() {
		return (
				<MegaMenu model={items} />
		)
	}
}
export default NavigationBar;