import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
const Header = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container fluid className="ms-3">
        <Navbar.Brand className="navbars fs-2 ms-3 fw-bold" href="#">
          iMovie
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#action1" className="fs-5 fw-bold">
              Movie
            </Nav.Link>
            <Nav.Link href="#action1" className="fs-5 fw-bold">
              Tv Show
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
