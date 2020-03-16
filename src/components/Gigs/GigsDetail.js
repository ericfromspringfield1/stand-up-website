// import React, { Component } from 'react';
// import GigsManager from '../../modules/GigsManager';

// class GigsDetail extends Component {

//   state = {
//       gig: "",
//       date: "",
//       venues: [],
//       audiences: [],
//       spots: [],
//       loadingStatus: true, 
//   }

//   componentDidMount(){
//     console.log("GigDetail: ComponentDidMount");
//     //get(id) from GigsManager and hang on to the data; put it into state
//     GigsManager.get(this.props.gigId)
//     .then((gig) => {
//       this.setState({
//         gig: gig.name,
//         loadingStatus: false,
//       });
//     });
//   }


//   handleDelete = () => {
//     //invoke the delete function in GigsManager and re-direct to the gig list.
//     this.setState({loadingStatus: true})
//     GigsManager.delete(this.props.gigId)
//     .then(() => this.props.history.push("/gigs"))
// }

//   render() {
//     return (
//         <>
//       <div className="card">
//         <div className="card-content">
//         <h3><span style={{ color: 'darkslategrey' }}>{this.state.gig.name}</span></h3>
//             <p>Date: {this.state.gig.date}</p>
//             <p>Venue: {this.state.gig.venue.name}</p>
//             <p>City: {this.state.gig.venue.city}</p>
//             <p>State: {this.state.gig.venue.state}</p>
//             <p></p>
//       </div>
//       <picture><img src={require('./capstoneLogo.png')} alt="Jyrny Jyrnyl Logo" /></picture>
//       </div>
//         </>
        
//     );
//   }
// }
 
// export default GigsDetail;