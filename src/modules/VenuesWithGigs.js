// import React, { Component } from 'react'
// import VenuesManager from '../../modules/VenuesManager'
// import GigsCard from '../Gigs/GigsCard'

// class VenuesWithGigs extends Component {
//     state = {
//       venue: {},
//       gigs: []
//     }

//     componentDidMount(){
//         //got here now make call to get employee with animal
//         VenuesManager.getVenuesWithGigs(this.props.match.params.venueId)
//             .then((APIResult) => {
//             this.setState({
//               venue: APIResult,
//               gigs: APIResult.gigs,
//             })
//         })
//     }

//     render(){
//         return (
//           <div className="card">
//             <p>Venue: {this.state.venue.venue}</p>
//             {this.state.gigs.map(gig =>
//               <GigsCard
//                 key={gig.id}
//                 gig={gig}
//                 {...this.props}
//               />
//             )}
//           </div>
//         )
//       }
//     }

// export default VenuesWithGigs;