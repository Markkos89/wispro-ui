import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const navBar = () => <Navbar bg='dark' variant='dark'>
  <Navbar.Brand href="/dashboard">Wispro</Navbar.Brand>
  <Nav>
    <Nav.Link href='/dashboard'>Usuarios</Nav.Link>
    <Nav.Link href='/resources'>Rendimiento</Nav.Link>
  </Nav>
</Navbar>

export default navBar;
 