import React from 'react';
import { filterEvent, getEvents } from '../resources/fakeEventService';
import { Link } from 'react-router-dom';
import axios from 'axios';
class Events extends React.Component {
	state = {
		events: [],
		category: [],
	};
	getcategoryName = (id) => {
		console.log(id);
		const result = this.state.category.filter((cat) => cat._id === id);
		return result[0].category_Name;
	};
	getData = async () => {
		// this.setState({ loading: false });
		//
		// 	const responseTwo = await axios.get(
		// 		'http://localhost:8000/api/catagory',
		// 	);
		// 	this.setState({ category: 'hi' });
		const response = await axios.get('http://localhost:8000/api/event');
		const responseTwo = await axios.get(
			'http://localhost:8000/api/catagory',
		);

		this.setState({ events: response.data, category: responseTwo.data });
	};
	componentWillMount() {
		this.getData();
	}

	render() {
		console.log(this.props.events);
		return (
			<>
				<table className='table'>
					<thead>
						<th>Title</th>
						<th>Catagory</th>
						<th>Location</th>
						<th>Active</th>
						<th>Adult Price</th>
						<th>Child Price</th>
					</thead>
					<tbody>
						{this.state.events.length == 0 && (
							<tr>
								<td>
									<h3 className='text-danger  text-center'>
										No data Found
									</h3>
								</td>
							</tr>
						)}

						{this.state.events.map((event) => (
							<tr key={event._id}>
								<td>
									<Link to={`/addevent/true/${event._id}`}>
										{event.event_Name}
									</Link>
								</td>
								<td>
									{this.getcategoryName(event.event_category)}
								</td>
								<td>{event.event_Location}</td>
								<td>{event.active.toString()}</td>
								<td>
									{event.adult_Ticket_Price_number + ' USD'}
								</td>
								<td>
									{event.child_Ticket_Price_number + ' USD'}
								</td>
								<td>
									<button
										onClick={() =>
											this.props.deleteEvent(event._id)
										}
										className='btn-danger mt-2 btn-sm '>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</>
		);
	}
}

export default Events;
