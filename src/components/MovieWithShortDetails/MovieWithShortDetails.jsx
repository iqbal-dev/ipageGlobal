import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./MovieWithShortDetails.css";
const MovieWithShortDetails = ({ movieData }) => {
  const genres = useSelector((state) => state.movie.genres.genres);
  const genre = genres?.filter((value) =>
    movieData?.genre_ids.includes(value.id)
  );
  //review
  const numberOfReview = (numberOfRating) => {
    const row = [];
    const value = Math.floor(numberOfRating / 2);
    for (let i = 0; i < value; i++) {
      row.push(
        <li key={i + 11}>
          <FaStar />
        </li>
      );
    }
    if (value < 5) {
      for (let j = 0; j < 5 - value; j++) {
        row.push(
          <li style={{ color: "rgb(0 0 0 / 10%)" }} key={j + 33}>
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
          style={{ height: "110px" }}
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
        <p className="text-black-50">
          {genre?.map(
            (data, i) => data.name + (i + 1 === genre.length ? "" : ", ")
          )}
        </p>
        <ul className="d-flex review m-0 p-0">
          {numberOfReview(movieData?.vote_average)}
        </ul>
      </Col>
    </Row>
  );
};

export default MovieWithShortDetails;
