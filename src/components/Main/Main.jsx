import React from "react";
import { Button } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import NowPlay from "../NowPlay/NowPlay";
import TopRatedMovie from "../TopRatedMovie/TopRatedMovie";
import "./Main.css";
const Main = () => {
  return (
    <div>
      <div className="posterAndInfo d-flex align-items-center ps-5">
        <div>
          <div>
            <p className="fs-5 fw-normal m-0 text-uppercase">season 10</p>
            <h1 className="text-uppercase">Supernatural</h1>
            <h5 className="my-4">action, Horror, Comedy</h5>
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
      <NowPlay />
      <TopRatedMovie />
    </div>
  );
};

export default Main;
