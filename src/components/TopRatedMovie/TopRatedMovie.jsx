import React from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import { banner } from "../../redux/movie/movieAction";

const TopRatedMovie = ({ popularMovies, isLoading }) => {
  const dispatch = useDispatch();
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
  };
  const slider = React.useRef(null);
  return (
    <>
      <div>
        <div className="d-flex justify-content-between pt-4 pb-3">
          <h5> Popular </h5>
          <div>
            <button
              onClick={() => slider?.current?.slickPrev()}
              className="border-0 bg-white"
            >
              <MdOutlineKeyboardArrowLeft size="1.6rem" />
            </button>
            <button
              onClick={() => slider?.current?.slickNext()}
              className="border-0 bg-white"
            >
              <MdOutlineKeyboardArrowRight size="1.6rem" />{" "}
            </button>
          </div>
        </div>
        <Slider ref={slider} {...settings}>
          {popularMovies?.map((data) => (
            <div
              className="position-relative"
              style={{ cursor: "pointer" }}
              onClick={() => dispatch(banner(data))}
            >
              <img
                className="img-fluid"
                style={{ width: "95%", height: "300px" }}
                src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
                alt=""
              />
              <div
                style={{ width: "100%", bottom: "0" }}
                className="ps-3 position-absolute"
              >
                <p className=" py-1 text-white">
                  {data.original_title ? data.original_title : data.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default TopRatedMovie;
