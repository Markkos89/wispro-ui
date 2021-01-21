import NavBar from "components/NavBar/NavBar";
import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => {
  return (
    <React.Fragment>
      <NavBar />
      <Container>
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
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.authentication.loggedIn,
});

export default connect(mapStateToProps, null)(PrivateRoute);
