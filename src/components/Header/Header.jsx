import React from "react";
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
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
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="fs-5 fw-bold">
              Movie
            </Nav.Link>
            <Nav.Link href="#action1" className="fs-5 fw-bold">
              Tv Show
            </Nav.Link>
          </Nav>
          <Form className="d-flex me-3 position-relative">
            <FormControl
              pill
              type="search"
              placeholder="Search"
              className="me-2 border-0 search ms-2 p-2"
              aria-label="Search"
            />
            <span className="position-absolute ms-3 mt-2">
              <AiOutlineSearch size="1.4rem" />
            </span>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
