import React, { Component } from "react";
import SpotsManager from "../../modules/SpotsManager";
import "./GigsForm.css";

class SpotsEditForm extends Component {
  //set the initial state
  state = {
    spot: "",
    loadingStatus: true
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange); 
  };

  updateExistingSpot = evt => {
    evt.preventDefault();
    const editedSpot = {
      spot: this.state.name,
      id: this.props.match.params.spotId,
      userId: parseInt(sessionStorage.getItem("credentials"))
    };

    SpotsManager.update(editedSpot).then(() => this.props.history.push("/spots"));
    this.setState({ loadingStatus: true });
  };

  componentDidMount() {
    SpotsManager.get(this.props.match.params.spotId).then(spot => {
      this.setState({
        spot: spot.name,
        loadingStatus: false
      }); 
    });
  }

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="name"
                value={this.state.name}
              />
              <label htmlFor="spot">Spot</label>
              </div>

            <select
            type="select"
            required
              className="form-control"
              id="spotId"
              value={this.state.spotId}
              onChange={this.handleFieldChange}
              >
              {this.state.spots.map(spot => (
                <option key={spot.id} value={spot.id}>
                  {spot.name}
                </option>
              ))}
              <label htmlFor="spot">Spot</label>
              </select>

            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.updateExistingSpot}
                className="btn btn-primary"
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

export default SpotsEditForm;
