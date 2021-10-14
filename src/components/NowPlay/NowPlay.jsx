import React from "react";
import { Button } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import { banner } from "../../redux/movie/movieAction";
import "./NowPlay.css";
const NowPlay = ({ nowPlay, isLoading }) => {
  const dispatch = useDispatch();
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
  };
  const slider = React.useRef(null);
  return (
    <>
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
          {nowPlay?.map((data) => (
            <div
              className="position-relative "
              onClick={() => dispatch(banner(data))}
              key={data.id}
            >
              <img
                className="img-fluid movie"
                style={{ width: "95%", height: "300px" }}
                src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
                alt=""
              />
              <p className="p-2 m-0 fs-5 position-absolute more__movie">
                <AiOutlinePlus className="fw-bold" size="1.6rem" />
              </p>
              <div
                style={{ width: "100%", bottom: "10px" }}
                className="d-flex justify-content-center position-absolute"
              >
                <Button
                  style={{
                    width: "80%",
                  }}
                  className=" py-2 fw-bold watch__now"
                >
                  Watch Now
                </Button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default NowPlay;
