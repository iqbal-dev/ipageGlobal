import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "./MovieWithShortDetails.css";
const MovieWithShortDetails = ({ movieData }) => {
  const numberOfReview = (value) => {
    const row = [];

    if (value < 5) {
      for (let j = 0; j < 5 - value; j++) {
        row.push(
          <li style={{ color: "rgb(0 0 0 / 10%)" }} key={j + 33}>
            <FaStar />
          </li>
        );
      }
    }
    if (value > 5) {
      for (let i = 0; i < 5; i++) {
        row.push(
          <li key={i + 11}>
            <FaStar />
          </li>
        );
      }
    }
    return row;
  };
  return (
    <Row className="align-items-center justify-content-between pb-4">
      <Col md={4}>
        <img
          className="img-fluid"
          src={`https://image.tmdb.org/t/p/original${movieData?.poster_path}`}
          alt=""
        />
      </Col>
      <Col md={8}>
        <div
          className="d-flex justify-content-between"
          style={{ width: "90%" }}
        >
          <h5>
            {movieData?.original_title
              ? movieData?.original_title
              : movieData?.name}
          </h5>
        </div>
        <p className="text-black-50">{movieData?.movieType}</p>
        <ul className="d-flex review m-0 p-0">
          {numberOfReview(movieData?.vote_average)}
        </ul>
      </Col>
    </Row>
  );
};

export default MovieWithShortDetails;
