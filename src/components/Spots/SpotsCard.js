import React, { Component } from 'react';
import './Audiences.css'

class SpotsCard extends Component {
  render() {
    return (
      <div className="card">
         <h3>I have performed in the {this.props.spot.name} spot</h3>
          <picture>
            <img src={require('./charlieChaplin.png')} alt="Chaplin" />
          </picture>
          <button type="button" onClick={() => this.props.deleteSpot(this.props.spot.id)}>Delete Spot</button>
          <button type="button" onClick={() => {this.props.history.push(`/spots/${this.props.spot.id}/edit`)}}>Edit</button>
          </div>
    );
  }
}

export default SpotsCard;