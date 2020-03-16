// import React, { Component } from "react";
// // import DetailCard from "../Presentation/DetailCard";
// import GigsManager from "../../modules/GigsManager";
// import VenuesManager from "../../modules/VenuesManager";
// import AudiencesManager from "../../modules/AudiencesManager";
// import SpotsManager from "../../modules/SpotsManager";
// // import ComponentManager from "../../modules/ComponentManager";
// import DetailCard2 from "../Presentation/DetailCard2";

// export default class ResourceList2 extends Component {
//   state = { components: [] };
//   loggedInUser = parseInt(sessionStorage.getItem("credentials"));

//   componentDidMount() {
//     fetch(`"http://localhost:8088/${resource}"`).then(e => e.json());
//     ComponentManager.getAll(this.loggedInUser).then(componentObject =>
//       this.setState({ component: componentObject })
//     );
//   } 

//   deleteComponent = id => {
//     ComponentManager.delete(id).then(() => {
//       ComponentManager.getAll(this.loggedInUser).then(newComponent => {
//         this.setState({
//           component: newComponent
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
//               this.props.history.push`("/${resource}/new")`;
//             }}
//           >
//             Add Event
//           </button>
//         </section>
//         <div className="container-cards">
//           {this.state.component.map(componentObject => (
//             <DetailCard2
//               key={componentObject.id}
//               name={componentObject.name}
//               resource="resource"
//               addlInfo={componentObject.addlInfo}
//             />
//             ))} 
//             </div>
//         }
//       </React.Fragment>
//     );
//   }}