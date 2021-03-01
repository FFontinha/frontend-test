import React from "react"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './topbar.css';
import logo from './../../resources/full_logo.png';



export default function Topbar() {

  return (
    <Navbar className="nav" collapseOnSelect expand="lg" bg="light" variant="light">
    <Container>
      <Navbar.Brand href="#home">
      <img className="img" src={logo} alt="Synergy Logo"></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#Products">Products</Nav.Link>
          <Nav.Link href="#Downloads">Downloads</Nav.Link>
          <Nav.Link href="#Support">Support</Nav.Link>
          <Nav.Link href="#About">About</Nav.Link>
          <Nav.Link href="#Contact">Contact</Nav.Link>
        </Nav>
          <Button variant="outline-primary">Admin Center</Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
