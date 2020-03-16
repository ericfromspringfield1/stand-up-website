import React, { Component } from 'react';
import './Gigs.css'

class GigsCard extends Component {
  render() {
    return (
      <div className="gigsCard">
          <h1 className="gigName">{this.props.gig.name}</h1>
          <h3 className="gigDate">{this.props.gig.date}</h3>
          <h3 className="venueName"> {this.props.gig.name} Was Held At {this.props.gig.venue.name}</h3>
          <h3 className="venueCity">{this.props.gig.venue.city}</h3>
          <h3 className="venueState">{this.props.gig.venue.state}</h3>
          <picture>
            <img className="capLogo" src={require('./capstoneLogo2.png')} alt="jyrny jyrnyL Logo" />
          </picture>
          <h3 className="venueCapacity">{this.props.gig.venue.name} Seats {this.props.gig.venue.capacity} People</h3>
          <h3 className="audienceName">The Audience Was {this.props.gig.audience.name}</h3> 
          <h3 className="spotName">My Spot Order For {this.props.gig.name} Was {this.props.gig.spot.name}</h3>
          <button type="button" className="addGig--btn" onClick={() => {this.props.history.push("/gigs/new") }}>Add Gig</button>
          <button type="button" className="edit--btn" onClick={() => {this.props.history.push(`/gigs/${this.props.gig.id}/edit`)}}>Edit Gig</button>
          {/* <button type="button" className="delete--btn"  onClick={() => this.props.deleteGig(this.props.gig.id)}>Delete Gig</button> */}
          <button type="button" className="delete--btn" onClick={() => {if(window.confirm('You sure, tho?'))this.props.deleteGig(this.props.gig.id)}}>Delete Gig</button>
      </div>
    );
  } 
}

export default GigsCard; 

