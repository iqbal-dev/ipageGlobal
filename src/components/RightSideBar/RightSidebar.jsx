import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import {
  popularMovies,
  watchLists,
} from "../../Assets/movieDetails/movieDetails";
import MovieWithShortDetails from "../MovieWithShortDetails/MovieWithShortDetails";
import "./RightSidebar.css";
const RightSidebar = () => {
  return (
    <div className="px-4 border-start right__container pb-5">
      <Form className="d-flex position-relative">
        <FormControl
          pill
          type="search"
          placeholder="Search"
          className="me-2 border-0 search ms-2 px-2 py-2"
          aria-label="Search"
        />
        <span className="position-absolute ms-3 mt-2">
          <AiOutlineSearch size="1.4rem" />
        </span>
      </Form>
      <div className="mb-3 mt-4 mx-1 text-uppercase fw-bold text-black-50">
        Popular Movies
      </div>
      {popularMovies?.map((data) => (
        <MovieWithShortDetails movieData={data} />
      ))}
      <Button className="me-2 border-0">See More</Button>
      <div className="mb-3 mt-4 mx-1 text-uppercase fw-bold text-black-50">
        WatchLists
      </div>
      {watchLists?.map((data) => (
        <MovieWithShortDetails movieData={data} />
      ))}

      <Button className="me-2 border-0">See More</Button>
    </div>
  );
};

export default RightSidebar;
