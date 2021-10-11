import React from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Slider from "react-slick";
import poster1 from "../../Assets/moviePoster/movie1.jpg";
import poster2 from "../../Assets/moviePoster/movie2.jpeg";
import poster3 from "../../Assets/moviePoster/movie3.jpg";
import poster4 from "../../Assets/moviePoster/movie4.jpg";
import poster5 from "../../Assets/moviePoster/movie5.jpg";
import poster6 from "../../Assets/moviePoster/movie6.jpg";

const TopRatedMovie = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
  };
  const slider = React.useRef(null);
  return (
    <div>
      <div className="d-flex justify-content-between pt-4 pb-3">
        <h5> Now Play </h5>
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
        <div className="position-relative">
          <img
            className="img-fluid"
            style={{ width: "95%", height: "300px" }}
            src={poster1}
            alt=""
          />
          <div
            style={{ width: "100%", bottom: "0" }}
            className="ps-3 position-absolute"
          >
            <p className=" py-1 text-white">Watch Now</p>
          </div>
        </div>
        <div className="position-relative">
          <img
            className="img-fluid"
            style={{ width: "95%", height: "300px" }}
            src={poster2}
            alt=""
          />
          <div
            style={{ width: "100%", bottom: "0" }}
            className="ps-3 position-absolute"
          >
            <p className=" py-1 text-white">Watch Now</p>
          </div>
        </div>
        <div className="position-relative">
          <img
            className="img-fluid"
            style={{ width: "95%", height: "300px" }}
            src={poster3}
            alt=""
          />
          <div
            style={{ width: "100%", bottom: "0" }}
            className="ps-3 position-absolute"
          >
            <p className=" py-1 text-white">Watch Now</p>
          </div>
        </div>
        <div className="position-relative">
          <img
            className="img-fluid"
            style={{ width: "95%", height: "300px" }}
            src={poster4}
            alt=""
          />
          <div
            style={{ width: "100%", bottom: "0" }}
            className="ps-3 position-absolute"
          >
            <p className=" py-1 text-white">Watch Now</p>
          </div>
        </div>
        <div className="position-relative">
          <img
            className="img-fluid"
            style={{ width: "95%", height: "300px" }}
            src={poster5}
            alt=""
          />
          <div
            style={{ width: "100%", bottom: "0" }}
            className="ps-3 position-absolute"
          >
            <p className=" py-1 text-white">Watch Now</p>
          </div>
        </div>
        <div className="position-relative">
          <img
            className="img-fluid"
            style={{ width: "95%", height: "300px" }}
            src={poster6}
            alt=""
          />
          <div
            style={{ width: "100%", bottom: "0" }}
            className="ps-3 position-absolute"
          >
            <p className=" py-1 text-white">Watch Now</p>
          </div>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
      </Slider>
    </div>
  );
};

export default TopRatedMovie;
