import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  fetchBannerMovie,
  fetchBannerTvShow,
  fetchNowPlayMovie,
  fetchNowPlayTvShow,
  fetchPopularMovie,
  fetchPopularTvShow,
} from "../../redux/movie/movieAction";
import "./Header.css";
const Header = () => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState(1);
  return (
    <Navbar bg="white" expand="lg">
      <Container fluid className="ms-3">
        <Navbar.Brand className="navbars fs-2 ms-3 fw-bold" href="#">
          iMovie
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link
              className="fs-5 fw-bold"
              style={{ color: status === 1 ? "black" : "gray" }}
              onClick={() => {
                dispatch(fetchBannerMovie());
                dispatch(fetchNowPlayMovie());
                dispatch(fetchPopularMovie());
                setStatus(1);
              }}
            >
              Movie
            </Nav.Link>
            <Nav.Link
              className="fs-5 fw-bold"
              style={{ color: status === 2 ? "black" : "gray" }}
              onClick={() => {
                dispatch(fetchBannerTvShow());
                dispatch(fetchNowPlayTvShow());
                dispatch(fetchPopularTvShow());
                setStatus(2);
              }}
            >
              Tv Show
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
