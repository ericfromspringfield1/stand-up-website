// import React, { Component } from "react";
// import DetailCard from "../Presentation/DetailCard";
// import VenuesManager from '../../modules/VenuesManager'


// export default class GenericVenuesList extends Component {
//     state = { venues: [] }
//     loggedInUser = parseInt(sessionStorage.getItem("credentials"));

//     componentDidMount() {
//         console.log("TASK LIST: ComponentDidMount");
//         //getAll from TasksManager and hang on to that data; put it in state
//         VenuesManager.getAll(this.loggedInUser)
//             .then(venues => {
//                 this.setState({
//                     venues: venues  
//           });
//         });
//       } 

//     render() {
//         return (
//             <React.Fragment>
//                 <section className="section-content">
//           <button
//             type="button"
//             className="btn"
//             onClick={() => {
//               this.props.history.push("/venues/new");
//             }}
//           >
//             Add Venue
//           </button>
//         </section>
//         <div className="container-cards">
//           {this.state.venues.map(venue => (
//             <DetailCard
//               key={venue.id}
//               venueName={venue.name}
//               resource="venues"
//               venueCity={venue.city}
//               venueState={venue.state}
//               venueCapacity={venue.capacity}
//             />
//             ))} 
//             </div>
//             </React.Fragment>
//         )
//     }
// } 


