import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBannerMovie,
  fetchNowPlayMovie,
  fetchPopularMovie,
} from "../../redux/movie/movieAction";
import NowPlay from "../NowPlay/NowPlay";
import TopRatedMovie from "../TopRatedMovie/TopRatedMovie";
import "./Main.css";
const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBannerMovie());
    dispatch(fetchNowPlayMovie());
    dispatch(fetchPopularMovie());
  }, [dispatch]);
  const latestMovie = useSelector((state) => state.movie);
  console.log(latestMovie);
  const { poster_path, original_title, genres, name } =
    latestMovie?.latestMovie;
  return (
    <>
      {latestMovie.isLoading ? (
        <p style={{ textAlign: "center", marginTop: "40%", fontSize: "25px" }}>
          Loading...
        </p>
      ) : (
        <div>
          <div
            className="posterAndInfo d-flex align-items-center ps-5"
            style={{
              backgroundImage: poster_path
                ? `url(${"https://image.tmdb.org/t/p/original" + poster_path})`
                : `url("https://i.ibb.co/XCzr55Q/movie1.jpg")`,
            }}
          >
            <div>
              <div>
                <h1 className="text-uppercase">
                  {original_title ? original_title : name}
                </h1>
                <h5 className="my-4">
                  {genres?.map((data) => data.title + " ,")}
                </h5>
              </div>
              <div className="d-flex align-items-center ">
                <Button className="px-5 py-3 me-4 fw-bold">Watch Now</Button>{" "}
                <p
                  className="px-3 py-3 m-0 fs-5"
                  style={{
                    backgroundColor: "rgb(235 195 195 / 57%)",
                    color: "white",
                  }}
                >
                  <AiOutlinePlus className="fw-bold" size="1.6rem" />
                </p>
              </div>
            </div>
          </div>
          <NowPlay nowPlay={latestMovie?.nowPlay?.results} />
          <TopRatedMovie popularMovies={latestMovie?.popular?.results} />
        </div>
      )}
    </>
  );
};

export default Main;
