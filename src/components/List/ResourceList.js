// import React, { Component } from "react";
// import DetailCard from "../Presentation/DetailCard";
// import GigsManager from "../../modules/GigsManager";
// import AudiencesManager from "../../modules/AudiencesManager";
// import VenuesManager from "../../modules/VenuesManager";
// import SpotsManager from "../../modules/SpotsManager";

// const ComponentsManager = {
//   GigsManager,
//   AudiencesManager,
//   VenuesManager,
//   SpotsManager
// };
// const GigsURL = `http://localhost:8088/gigs`;
// const VenuesURL = `http://localhost:8088/venues`;
// const AudiencesURL = `http://localhost:8088/audiences`;
// const SpotsURL = `http://localhost:8088/spots`;

// export default class ResourceList extends Component {
//   state = { components: [] };
//   loggedInUser = parseInt(sessionStorage.getItem("credentials"));

//   componentDidMount() {
//     fetch(`${GigsURL}`)
//     fetch(`${VenuesURL}`)
//     fetch(`${AudiencesURL}`)
//     fetch(`${SpotsURL}`)
//     .then(e => e.json());
//     ComponentsManager.getAll(this.loggedInUser)
//     .then(components  =>
//       this.setState({ 
//         components: components
//     })

// );
//   }

//   render() {
//     return (
//       <React.Fragment>
//         {this.state.components.map(component => (
//           <DetailCard
//             key={component.gigs.id}
//             key={component.venues.id}
//             key={component.audiences.id}
//             key={component.spots.id}
//             gigName={component.gigs.gig}
//             resource="components"
//             date={component.gigs.date}
//             rating={component.gigs.rating}
//             venueName={component.venues.name}
//             venueCity={component.venues.city}
//             venueState={component.venues.state}
//             audienceName={component.audiences.name}
//             spotName={component.spots.name}
//           />
//         ))}
//         <section className="section-content">
//           <button
//             type="button"
//             className="btn"
//             onClick={() => {
//               this.props.history.push("/gigs/new");
//             }}
//           >
//             Add Gig
//           </button>
//         </section>
//       </React.Fragment>
//     );
//   }
// }
