import Catagory from './Catagory';
import axios from 'axios';
import Events from './Events';
import React from 'react';
import { getEvents } from '../resources/fakeEventService';
import { getCategories } from '../resources/fakeCategoryService';

class Home extends React.Component {
	state = {
		category: null,
		events: [],
		filterEvent: false,
		filterevents: null,
		loading: true,
	};
	deleteEvent = (id) => {
		this.setState({
			events: this.state.events.filter((event) => event._id !== id),
		});
	};
	filterEvent = (id, check) => {
		this.setState({ filterEvent: check });
		this.setState({
			filterevents: this.state.events.filter(
				(event) => event.category._id == id,
			),
		});
	};

	render() {
		return (
			<>
				<div class='d-flex flex-row  bd-highlight mb-3'>
					<Catagory filterEvent={this.filterEvent} />
					<Events
						category={this.state.category}
						deleteEvent={this.deleteEvent}
						events={
							this.state.filterEvent
								? this.state.filterevents
								: this.state.events
						}
					/>
				</div>
			</>
		);
	}
}

export default Home;
