// import React, { Component } from "react";
// import AudiencesCard from "../Audiences/AudiencesCard";
// import AudiencesManager from '../../modules/AudiencesManager';

// export default class AudiencesList2 extends Component {
//   state = { audiences: [] };

//   loggedInUser = parseInt(sessionStorage.getItem("credentials"));
//   componentDidMount() {
//     AudiencesManager.getAll(this.loggedInUser).then(audiences => this.setState({ audiences: audiences }))
    
//   }

//   deleteAudience = id => {
//     AudiencesManager.delete(id).then(() => {
//       AudiencesManager.getAll(this.loggedInUser).then(newAudiences => {
//         this.setState({
//           audiences: newAudiences
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
//               this.props.history.push("/audiences/new");
//             }}
//           >
//             Add Audience Type
//           </button>
//         </section>

//         {this.state.audiences.map(audience => (
           
//           <AudiencesCard key={audience.id} audience={audience} name={audience.name} resource="audiences" deleteAudience={this.deleteAudience}
//           {...this.props}/>
//         ))}
//       </React.Fragment>
//     );
//   }
// }
