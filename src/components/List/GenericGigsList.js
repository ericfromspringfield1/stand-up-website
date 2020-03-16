// import React, { Component } from "react";
// import DetailCard from "../Presentation/DetailCard";
// import GigsManager from "../../modules/GigsManager";
// import VenuesManager from "../../modules/VenuesManager";
// import AudiencesManager from "../../modules/AudiencesManager";
// import SpotsManager from "../../modules/SpotsManager";


// export default class GenericGigsList extends Component {
//   state = { gigs: [] };
//   loggedInUser = parseInt(sessionStorage.getItem("credentials"));

//   componentDidMount() {
//     console.log("TASK LIST: ComponentDidMount");
//     //getAll from TasksManager and hang on to that data; put it in state
//     GigsManager.getAll(this.loggedInUser)
//         .then(gigs => {
//             this.setState({
//                 gigs: gigs  
//       });
//     }); 
//   }

//   deleteGig = id => {
//     GigsManager.delete(id).then(() => {
//       GigsManager.getAll(this.loggedInUser).then(newGigs => {
//         this.setState({
//           gigs: newGigs
//         });
//       });
//     });
//   };

//   render() {
//     return (
//       <React.Fragment>
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
//         <div className="container-cards">
//           {this.state.gigs.map(gig => (
//             <DetailCard
//               key={gig.id}
//               name={gig.gig}
//               resource="gigs"
//               date={gig.date}
//               rating={gig.rating}
//             />
//             ))} 
//             </div> 
//         }
//       </React.Fragment>
//     );
//   }}