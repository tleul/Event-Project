import { Route, Switch } from 'react-router-dom';
import Catagory from './Catagory';

import Events from './Events';
import React from 'react';
import {  getEvents} from '../resources/fakeEventService'

  class Home extends React.Component {
  	state = {
            events: getEvents(),
            filterEvent:false,
            filterevents: null
	};
	deleteEvent = (id) => {
		this.setState({
			events: this.state.events.filter((event) => event._id !== id),
		});
	};
	filterEvent = (id,check) => {
        this.setState({ filterEvent: check })
        this.setState({filterevents: this.state.events.filter(event=> event.category._id == id)})
	}
      render() {
          
          return (
              <>
	
		
				<div class='d-flex flex-row  bd-highlight mb-3'>
                      <Catagory filterEvent={this.filterEvent}  />
                      <Events deleteEvent={this.deleteEvent} events={this.state.filterEvent ? this.state.filterevents : this.state.events} />
					
				</div>
		
		</>
          );
      }
  }
  
  export default Home;

