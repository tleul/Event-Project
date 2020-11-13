import React from 'react';
import { filterEvent, getEvents } from '../resources/fakeEventService';
import { Link } from 'react-router-dom';

class Events extends React.Component {

	render() {


	
		return (
			<>
				
				<table className='table'>
					<thead>
						<th>Title</th>
						<th>Catagory</th>
						<th>Ticket Avaliable</th>
						<th>Price</th>
					</thead>
					<tbody>
						{this.props.events.length == 0 && (
							<tr>
								<td>
									<h3 className='text-danger  text-center'>
										No data Found
									</h3>
								</td>
							</tr>
						)}
						{this.props.events.map((event) => (
							<tr key={event._id}>
								<td>
									<Link
										to={`/events/${event._id}/${event.title}`}>
										{event.title}
									</Link>
								</td>
								<td>{event.category.name}</td>
								<td>{event.numberOfTicketsAvailable}</td>
								<td>{event.Price}</td>
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
