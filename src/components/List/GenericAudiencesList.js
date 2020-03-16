// import React, { Component } from "react"
// import DetailCard from "../Presentation/DetailCard";
// import AudiencesManager from "../../modules/AudiencesManager"


// export default class GenericAudiencesList extends Component {
//     state = { audiences: [] }
//     loggedInUser = parseInt(sessionStorage.getItem("credentials"));

//     componentDidMount() {
//         console.log("TASK LIST: ComponentDidMount");
//         //getAll from TasksManager and hang on to that data; put it in state
//         AudiencesManager.getAll(this.loggedInUser)
//             .then(audiences => {
//                 this.setState({
//                     audiences: audiences  
//           });
//         });
//       }

//     render() {
//         return (
//             <React.Fragment>
//                 {
//                     this.state.audiences.map(audience =>
//                         <DetailCard key={audience.id}
//                                     audienceName={audience.name}
//                                     resource="audiences" />
//                     )
//                 }
//             </React.Fragment>
//         ) 
//     } 
// }