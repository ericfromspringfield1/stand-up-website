import React, { Component } from "react";
import GigsManager from "../../modules/GigsManager";
import "./GigsForm.css";
import VenuesManager from "../../modules/VenuesManager";
import AudiencesManager from "../../modules/AudiencesManager";
import SpotsManager from "../../modules/SpotsManager";


class GigsForm extends Component {
  state = { 
    name: "",
    date: "",   
    venues: [],
    venueId: "",
    audiences: [],
    audienceId: "",
    spots: [], 
    spotId: "",
    loadingStatus: false 
  };

  constructNewGig = evt => {
   evt.preventDefault();
   if (this.state.name === "" || this.state.date === "" || this.state.venueId === "" ||
   this.state.audienceId === "" || this.state.spotId === ""){
    window.alert("Please Make A Valid Selection")
   } else {
      this.setState({ loadingStatus: true });
      const gig = {   
        name: this.state.name,
        date: this.state.date,
        venueId: this.state.venueId,
        audienceId: this.state.audienceId,
        spotId: this.state.spotId,
        userId: parseInt(sessionStorage.getItem("credentials"))
      }
      GigsManager.post(gig).then(() => this.props.history.push("/gigs"));
    }
  }
    
    //ComponentDidMount populates the Form with options and text boxes areas so the user can add a Gig
    componentDidMount() {
      const loggedInUserVenue = parseInt(sessionStorage.getItem("credentials")); 
       VenuesManager.getAll(loggedInUserVenue).then(venues =>
       this.setState({ venues: venues })
       );

       AudiencesManager.getAll().then(audiences =>
       this.setState({ audiences: audiences })
       );

       SpotsManager.getAll().then(spots =>
        this.setState({ spots: spots })
        );  
  }
                      
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };
  
  /*  Local method for validation, set loadingStatus, create gig object, invoke the GigsManager post method, and redirect to the full gig list
  */

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="name"
                placeholder="Gig"
              />
              <label htmlFor="gig">Gig</label>

              <input
                type="date"
                required
                onChange={this.handleFieldChange}
                id="date"
                placeholder="Date Of Gig"
              />
              <label htmlFor="date">Date</label>
            </div>
          
            <select
              className="form-control"
              id="venueId"
              value={this.state.venueId}
              onChange={this.handleFieldChange}
              >
              <option value="">Please Select A Venue</option>
              {this.state.venues.map(venue => (
                <option key={venue.id} value={venue.id}>
                {venue.name} 
                </option>
            ))}
            </select>
            <label htmlFor="venue"></label>

            <select
              className="form-control"
              id="audienceId"
              value={this.state.audienceId}
              onChange={this.handleFieldChange}
              >
            <option value="">How Was The Audience?</option>
              {this.state.audiences.map(audience => (
                <option key={audience.id} value={audience.id}>
                 {audience.name} 
                </option>
                
                ))}
            </select>
            <label htmlFor="audience"></label>

            <select
              className="form-control"
              id="spotId"
              value={this.state.spotId}
              onChange={this.handleFieldChange}
              >
              <option value="">What Spot Order Did You Perform?</option>
              {this.state.spots.map(spot => (
                <option key={spot.id} value={spot.id}>
                  {spot.name}
                </option>
              ))}
            </select>
            <label htmlFor="spot"></label>

            <div className="alignright">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.constructNewGig}
                >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default GigsForm;