import React from 'react';
import { filterEvent, getEvents } from '../resources/fakeEventService';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import axios from 'axios';
import API from '../services/api';
class Events extends React.Component {
	state = {
		events: [],
		category: [],
	};
	getcategoryName = (id) => {
		console.log(id);
		const result = this.state.category.filter((cat) => cat._id === id);
		// return result[0].category_Name;
	};
	getData = async () => {
		const response = await API.get('/event');
		const responseTwo = await API.get('/catagory');
		console.log(response);

		this.setState({ events: response.data, category: responseTwo.data });
	};
	componentWillMount() {
		this.getData();
	}

	render() {
		console.log(this.props.user);
		return (
			<>
				<div className='flex '>
					<div className=''>
						<p>
							{' '}
							WELCOME{' '}
							{this.props.user &&
								this.props.user.name.toUpperCase()}
						</p>
					</div>
					<div>
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
								{/* // category have to be only on the events */}
								{this.state.events.map((event) => (
									<tr key={event._id}>
										<td>
											<Link
												to={`/addevent/true/${event._id}`}>
												{event.event_Name}
											</Link>
										</td>
										<td>
											{/* {this.getcategoryName(event.event_category)}{' '}
											 */}
										</td>
										<td>{event.event_Location}</td>
										<td>{event.active.toString()}</td>
										<td>
											{event.adult_Ticket_Price_number +
												' USD'}
										</td>
										<td>
											{event.child_Ticket_Price_number +
												' USD'}
										</td>
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
									</tr>
								))}
							</tbody>
						</table>
					</div>{' '}
				</div>
			</>
		);
	}
}
Events.propTypes = {
	isAuthenticated: PropTypes.func.isRequired,
	user: PropTypes.array,
};
const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
	user: state.auth.user,
});
export default connect(mapStateToProps)(Events);
