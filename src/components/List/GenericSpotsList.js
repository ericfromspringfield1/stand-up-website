// import React, { Component } from "react"
// import DetailCard from "../Presentation/DetailCard";
// import SpotsManager from '../../modules/SpotsManager'


// export default class GenericSpotsList extends Component {
//     state = { spots: [] }
//     loggedInUser = parseInt(sessionStorage.getItem("credentials"));

//     componentDidMount() {
//         console.log("TASK LIST: ComponentDidMount");
//         //getAll from TasksManager and hang on to that data; put it in state
//         SpotsManager.getAll(this.loggedInUser)
//             .then(spots => {
//                 this.setState({
//                     spots: spots  
//           });
//         });
//       }

//     render() {
//         return (
//             <React.Fragment>
//                 {
//                     this.state.spots.map(spot =>
//                         <DetailCard key={spot.id}
//                                     spotName={spot.name}
//                                     resource="spots" />
//                     )
//                 }
//             </React.Fragment>
//         )
//     }
// }