import React, { Component } from "react";
import VenuesCard from "./VenuesCard";
import VenuesManager from '../../modules/VenuesManager';

export default class VenuesList2 extends Component {
  state = { venues: [] };

  loggedInUser = parseInt(sessionStorage.getItem("credentials"));
  componentDidMount() {
    VenuesManager.getAll(this.loggedInUser).then(venues => this.setState({ venues: venues }))
    
  }

  deleteVenue = id => {
    VenuesManager.delete(id).then(() => {
      VenuesManager.getAll(this.loggedInUser).then(newVenues => {
        this.setState({
          venues: newVenues 
        });
      });
    });
  };

  // handleDelete = () => {
  //       //invoke the delete function in GigsManager and re-direct to the gig list.
  //       this.setState({loadingStatus: true})
  //       VenuesManager.delete(this.props.venueId)
  //       .then(() => this.props.history.push("/gigs"))
  // }

  render() {
    return (
      <React.Fragment>
        <section className="section-content">
          <button
            type="button"
            className="venue--btn"
            onClick={() => {
              this.props.history.push("/venues/new");
            }}
          >
            Add Venue
          </button>
        </section>

        {this.state.venues.map(venue => (
           
          <VenuesCard key={venue.id} venue={venue} name={venue.name} city={venue.city} state={venue.state} capacity={venue.capacity} resource="venues" deleteVenue={this.deleteVenue} 
          {...this.props}/>
        ))}
      </React.Fragment>
    );
  }
}
