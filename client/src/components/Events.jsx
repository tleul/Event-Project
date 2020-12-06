import React from 'react';
import { filterEvent, getEvents } from '../resources/fakeEventService';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import axios from 'axios';
import API from '../services/api';
import { loadevent } from '../redux/actions/event';
class Events extends React.Component {
	render() {
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
						{this.props.event.length == 0 && (
							<tr>
								<td>
									<h3 className='text-danger  text-center'>
										No data Found
									</h3>
								</td>
							</tr>
						)}
						{/* // category have to be only on the events */}
						{this.props.event.map((event) => (
							<tr key={event._id}>
								<td>
									<Link to={`/addevent/false/${event._id}`}>
										{event.event_Name}
									</Link>
								</td>
								<td>{event.event_category.category_Name}</td>
								<td>{event.event_Location}</td>
								<td>{event.active.toString()}</td>
								<td>
									{event.adult_Ticket_Price_number + ' USD'}
								</td>
								<td>
									{event.child_Ticket_Price_number + ' USD'}
								</td>
								{this.props.admin && (
									<td>
										<button
											onClick={() =>
												this.props.deleteEvent(
													event._id,
												)
											}
											className='btn-danger mt-2 btn-sm '>
											Delete
										</button>
									</td>
								)}
							</tr>
						))}
					</tbody>
				</table>
			</>
		);
	}
}

export default Events;
