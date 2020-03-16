import React, { Component } from 'react';
import './Venues.css'

class VenuesCard extends Component {
  render() {
    return (
      <div className="venuesCard">
          <h3 className="venueName1"> {this.props.venue.name}</h3> <h3 className="venueCity">{this.props.venue.city}</h3><h3 className="venueState">{this.props.venue.state}</h3> <h3 className="venueCapacity"> {this.props.venue.name} holds {this.props.venue.capacity} people</h3>
          <picture>
            <img className="mrT" src={require('./mrTVenyou2.png')} alt="Mr. T Venyou" />
          </picture>
          <button type="button" className="addVenue--btn" onClick={() => {this.props.history.push("/venues/new")}}>Add Venue</button>
          <button type="button" className="editVenue--btn" onClick={() => {this.props.history.push(`/venues/${this.props.venue.id}/edit`)}}>Edit Venue</button>
          {/* <button type="button" onClick={() => this.props.deleteVenue(this.props.venue.id)}>Delete Venue</button> */}
          <button type="button" className="deleteVenue--btn" onClick={() => {if(window.confirm('You sure, tho?'))this.props.deleteVenue(this.props.venue.id)}}>Delete Venue</button>
      </div>
    );
  }
}

export default VenuesCard;   