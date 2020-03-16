import React, { Component } from "react";
import GigsCard from "./GigsCard";
import GigsManager from "../../modules/GigsManager";
import VenuesManager from "../../modules/VenuesManager";
import AudiencesManager from "../../modules/AudiencesManager";
import SpotsManager from "../../modules/SpotsManager";
import "./Gigs.css"

export default class GigsList2 extends Component {
  state = { gigs: [] };

  loggedInUser = parseInt(sessionStorage.getItem("credentials"));
  componentDidMount() {
    GigsManager.getAll(this.loggedInUser).then(gigs => this.setState({ gigs: gigs }))
    VenuesManager.getAll(this.loggedInUser).then(venues => this.setState({ venues: venues }))
    AudiencesManager.getAll().then(audiences => this.setState({ audiences: audiences }))
    SpotsManager.getAll().then(spots => this.setState({ spots: spots }))
    
  }
  
  deleteGig = id => {
        GigsManager.delete(id).then(() => {
          GigsManager.getAll(this.loggedInUser).then(newGigs => {
            this.setState({
              gigs: newGigs
            });
          });
        });
      };


  render() {
    return (
      <React.Fragment>
        <section className="section-content">
          <button
            type="button"
            className="addGig--btn"
            onClick={() => {
              this.props.history.push("/gigs/new");
            }}
          >
            Add Gig
          </button>
        </section>

        {this.state.gigs.map(gig => (
           
          <GigsCard key={gig.id} gig={gig} name={gig.name} resource="gigs" deleteGig={this.deleteGig} 
          {...this.props}/>
        ))}
      </React.Fragment>
    );
  }
}
