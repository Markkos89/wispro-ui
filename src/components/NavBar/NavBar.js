import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import Logo from "../../assets/Logo_white.png";

const StyledNavbar = styled(Navbar)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  margin-top: 0px;
  background-color: #404245;
  border-bottom: 1px solid #de5a21;
  z-index: 99;

  img {
    width: 100%;
    max-width: 400px;
    min-width: 350px;
    height: 100%;
  }
`;

const StyledNavbarBrand = styled(Navbar.Brand)`
  font-size: 2em;
`;

const StyledNavbarLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  font-size: 1em;
  color: #fff;
  text-decoration: none;
  :hover {
    text-decoration: none;
    color: #fc6625;
  }
`;

const StyleUserLink = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 20px;
  width: 100%;
  color: #fff;
  font-size: 1em;
  :hover {
    text-decoration: none;
    color: #fc6625;
  }
`;

const navBar = ({ user, children }) => (
  <>
    <StyledNavbar>
      <StyledNavbarBrand href="/dashboard">
        <img src={Logo} alt="sparks" />
      </StyledNavbarBrand>
      <Nav>
        <StyledNavbarLink href="/dashboard">Dashboard</StyledNavbarLink>
        <StyledNavbarLink href="/add-candidate">
          Agregar Candidato
        </StyledNavbarLink>
      </Nav>
      <StyleUserLink href="#login">{user}</StyleUserLink>
    </StyledNavbar>
    {children}
  </>
);

export default navBar;
