import NavBar from "components/NavBar/NavBar";
import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
// import ProtoTypes from "prop-types";

const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => {
  return (
    <>
      <NavBar>
        <Route
          {...rest}
          render={(props) =>
            JSON.parse(localStorage.getItem("user"))?.tokens?.access?.token ? (
              <Component {...props} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
      </NavBar>
    </>
  );
};

// PrivateRoute.prototype = {
//   auth: ProtoTypes.object.isRequired,
// };

const mapStateToProps = (state) => ({
  loggedIn: state.authentication.loggedIn,
});

export default connect(mapStateToProps, null)(PrivateRoute);
