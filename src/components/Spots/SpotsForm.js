import React, { Component } from "react";
import SpotsManager from "../../modules/SpotsManager";
import "./GigsForm.css";

class SpotsForm extends Component {
  state = {
    spot: "",
    loadingStatus: false
  };

  componentDidMount() {
    SpotsManager.get(this.props.match.params.id).then(spot => {
      this.setState({
        spot: spot.name
      });
    });
  }

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create spot object, invoke the SpotsManager post method, and redirect to the full spot list
   */
  constructNewSpot = evt => {
    evt.preventDefault();
      
      this.setState({ loadingStatus: true });
      const spot = {
        name: this.state.name,
      };

      // Create the spot and redirect user to spot list
      SpotsManager.post(spot).then(() => this.props.history.push("/spots"));   
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
                onChange={this.handleFieldChange}
                id="name"
                placeholder="What Spot Did You Perform"
              />
              <label htmlFor="spot">Spot</label>
            </div>
            
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.constructNewSpot}
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

export default SpotsForm;
