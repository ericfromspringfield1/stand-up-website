import React, { Component } from "react";
import SpotsCard from "./SpotsCard";
import SpotsManager from '../../modules/SpotsManager';

export default class SpotsList2 extends Component {
  state = { spots: [] };

  loggedInUser = parseInt(sessionStorage.getItem("credentials"));
  componentDidMount() {
    SpotsManager.getAll(this.loggedInUser).then(spots => this.setState({ spots: spots }))
    
  }

  deleteSpot = id => {
    SpotsManager.delete(id).then(() => {
      SpotsManager.getAll(this.loggedInUser).then(newSpots => {
        this.setState({
          spots: newSpots
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
            className="btn"
            onClick={() => {
              this.props.history.push("/spots/new");
            }}
          >
            Add Spot
          </button>
        </section>

        {this.state.spots.map(spot => (
           
          <SpotsCard key={spot.id} spot={spot} name={spot.name} resource="spots" deleteSpot={this.deleteSpot}
          {...this.props}/>
        ))}
      </React.Fragment>
    );
  }
}
