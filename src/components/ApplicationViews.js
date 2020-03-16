import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Login from "./Authentication/Login";
import Welcome from "./Authentication/Welcome";
import Registration from "./Authentication/Registration";
import GigsList2 from "./Gigs/GigsList2";
import GigsDetail from "./Gigs/GigsDetail";
import GigsCard from "./Gigs/GigsCard";
import GigsForm from "./Gigs/GigsForm";
import VenuesCard from "./Venues/VenuesCard";
import AudiencesCard from "./Audiences/AudiencesCard";
import SpotsCard from "./Spots/SpotsCard";
import GigsEditForm from "./Gigs/GigsEditForm";
import AudiencesList2 from "./Audiences/AudiencesList2";
import AudiencesDetail from "./Audiences/AudiencesDetail";
import AudiencesEditForm from "./Audiences/AudiencesEditForm";
import AudiencesForm from "./Audiences/AudiencesForm";
import VenuesList2 from "./Venues/VenuesList2";
import VenuesDetail from "./Venues/VenuesDetail";
import VenuesForm from "./Venues/VenuesForm";
import VenuesEditForm from "./Venues/VenuesEditForm";
import SpotsList2 from "./Spots/SpotsList2";
import SpotsForm from "./Spots/SpotsForm";
import SpotsEditForm from "./Spots/SpotsEditForm";
// import GenericGigsList from "./List/GenericGigsList";
// import GenericVenuesList from "./List/GenericVenuesList";
// import GenericAudiencesList from "./List/GenericAudiencesList";
// import GenericSpotsList from "./List/GenericSpotsList";
// import DetailCard from "../components/Presentation/DetailCard";
// import ResourceList2 from "./List/ResourceList2"

export default class ApplicationViews extends Component {
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Welcome} />
        <Route path="/Registration" component={Registration} />
        <Route path="/Login" component={Login} />
        

        <Route
          exact
          path="/gigs/"
          render={props => {
            if (this.isAuthenticated()) {
              return <GigsList2 {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />

      <Route exact path="/gigs/:gigId(\d+)/edit" render={props => {
          return <GigsEditForm {...props} />
        }}
        />

        <Route
          exact
          path="/venues"
          render={props => {
            if (this.isAuthenticated()) {
              return <VenuesList2 {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />

        <Route
          exact
          path="/audiences"
          render={props => {
            if (this.isAuthenticated()) {
              return <AudiencesList2 {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />

        <Route
          exact
          path="/spots"
          render={props => {
            if (this.isAuthenticated()) {
              return <SpotsList2 {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />

        {/* <Route
          exact
          path="/resource"
          render={props => {
            if (this.isAuthenticated()) {
              return <ResourceList2 {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />  */}

        <Route
          exact
          path="/gigs/:gigId(\d+)"
          render={props => {
            // Pass the gigId to the GigsCard Component
            return (
              <GigsCard
                gigId={parseInt(props.match.params.gigId)}
                {...props}
              />
            );
          }}
        />

          <Route
          exact
          path="/gigs/:gigId(\d+)"
          render={props => {
            // Pass the gigId to the VenuesDetail Component
            return (
              <GigsDetail
              gigId={parseInt(props.match.params.gigId)}
              {...props}
              />
              );
            }}
               />
        

        <Route
          exact
          path="/venues/:venueId(\d+)"
          render={props => {
            // Pass the venueId to the VenuesCard Component
            return (
              <VenuesCard
                venueId={parseInt(props.match.params.venueId)}
                {...props}
              />
            );
          }}
        />

        <Route
          exact
          path="/audiences/:audienceId(\d+)"
          render={props => {
            // Pass the audienceId to the AudiencesCard Component
            return (
              <AudiencesCard
                audienceId={parseInt(props.match.params.audienceId)}
                {...props}
              />
            );
          }}
        />

        <Route
          exact
          path="/spots/:spotId(\d+)"
          render={props => {
            // Pass the spotId to the SpotsCard Component
            return (
              <SpotsCard
                spotId={parseInt(props.match.params.spotId)}
                {...props}
              />
            );
          }}
        />

        {/* Our shiny new route. */}
        <Route
          path="/gigs/new"
          render={props => {
            return <GigsForm {...props} />;
          }}
        />


        <Route
          path="/audiences/new"
          render={props => {
            return <AudiencesForm {...props} />;
          }}
        />

        <Route
          exact
          path="/audiences/:audienceId(\d+)"
          render={props => {
            // Pass the audienceId to the AudiencesDetail Component
            return (
              <AudiencesDetail
                audienceId={parseInt(props.match.params.audienceId)}
                {...props}
              />
            );
          }}
        />

        <Route
          exact
          path="/audiences/:audienceId(\d+)/edit"
          render={props => {
            return <AudiencesEditForm {...props} />;
          }}
        />

        <Route
          path="/venues/new"
          render={props => {
            return <VenuesForm {...props} />;
          }}
        />

        <Route
          exact
          path="/venues/:venueId(\d+)"
          render={props => {
            // Pass the venueId to the VenuesDetail Component
            return (
              <VenuesDetail
              venueId={parseInt(props.match.params.venueId)}
              {...props}
              />
              );
            }}
        />

        <Route
          exact
          path="/venues/:venueId(\d+)/edit"
          render={props => {
            return <VenuesEditForm {...props} />;
          }}
        />

        <Route
          exact
          path="/spots/:spotId(\d+)/edit"
          render={props => {
            return <SpotsEditForm {...props} />;
          }}
        />

        <Route
          path="/spots/new"
          render={props => {
            return <SpotsForm {...props} />;
          }}
        />
      </React.Fragment>
    );
  }
}
