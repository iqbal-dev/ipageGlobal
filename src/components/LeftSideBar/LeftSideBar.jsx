import React from "react";
import {
  AiFillSafetyCertificate,
  AiFillSetting,
  AiFillStar,
} from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import { FaNimblr } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import {
  RiAwardFill,
  RiCompassDiscoverFill,
  RiContactsFill,
  RiFolderDownloadFill,
  RiLogoutBoxRFill,
  RiSlideshow2Line,
  RiTimer2Line,
} from "react-icons/ri";
import { NavLink } from "react-router-dom";
import "./LeftSidebar.css";
const LeftSideBar = () => {
  return (
    <div className="LeftSideContainer">
      <div className="my-3 mx-1 text-uppercase fw-bold text-black-50">Menu</div>
      <NavLink className="menu" activeClassName="active__menu" to="/home">
        <p className="d-flex align-items-center">
          <MdHomeFilled size="1.4rem" /> <span className="ms-3">Home</span>
        </p>
      </NavLink>
      <NavLink to="/community" className="menu" activeClassName="active__menu">
        <p className="d-flex align-items-center">
          {" "}
          <AiFillSafetyCertificate size="1.4rem" />{" "}
          <span className="ms-3">Community</span>
        </p>
      </NavLink>
      <NavLink to="/discover" className="menu" activeClassName="active__menu">
        <p className="d-flex align-items-center">
          <RiCompassDiscoverFill size="1.4rem" />{" "}
          <span className="ms-3">Discover</span>
        </p>
      </NavLink>
      <NavLink to="/awards" className="menu" activeClassName="active__menu">
        <p className="d-flex align-items-center">
          <RiAwardFill size="1.4rem" />
          <span className="ms-3">Awards</span>
        </p>
      </NavLink>
      <NavLink to="/celebs" className="menu" activeClassName="active__menu">
        <p className="d-flex align-items-center">
          <RiContactsFill size="1.4rem" />
          <span className="ms-3">Celebs</span>
        </p>
      </NavLink>
      <div className="mb-3 mt-5 text-uppercase fw-bold text-black-50">
        Library
      </div>
      <NavLink to="/recent" className="menu" activeClassName="active__menu">
        <p className="d-flex align-items-center">
          <RiTimer2Line size="1.4rem" />
          <span className="ms-3">Recent</span>
        </p>
      </NavLink>
      <NavLink to="/top-rated" className="menu" activeClassName="active__menu">
        <p className="d-flex align-items-center">
          <AiFillStar size="1.4rem" />
          <span className="ms-3">Top Rated</span>
        </p>
      </NavLink>
      <NavLink to="/downloaded" className="menu" activeClassName="active__menu">
        <p className="d-flex align-items-center">
          <RiFolderDownloadFill size="1.4rem" />
          <span className="ms-3">Downloaded</span>
        </p>
      </NavLink>
      <div className="mb-3 mt-5 text-uppercase fw-bold text-black-50">
        Category
      </div>
      <NavLink to="/tv-show" className="menu" activeClassName="active__menu">
        <p className="d-flex align-items-center">
          <RiSlideshow2Line size="1.4rem" />
          <span className="ms-3">TV-Show</span>
        </p>
      </NavLink>
      <NavLink to="/movie" className="menu" activeClassName="active__menu">
        <p className="d-flex align-items-center">
          <BiCameraMovie size="1.4rem" />
          <span className="ms-3">Movie</span>
        </p>
      </NavLink>
      <NavLink to="/anime" className="menu" activeClassName="active__menu">
        <p className="d-flex align-items-center">
          <FaNimblr size="1.4rem" />
          <span className="ms-3">Anime</span>
        </p>
      </NavLink>
      <div className="mb-3 mt-5 text-uppercase fw-bold text-black-50">
        GENERAL
      </div>
      <NavLink to="/setting" className="menu" activeClassName="active__menu">
        <p className="d-flex align-items-center">
          <AiFillSetting size="1.4rem" />
          <span className="ms-3">Settings</span>
        </p>
      </NavLink>
      <NavLink to="/log-out" className="menu" activeClassName="active__menu">
        <p className="d-flex align-items-center">
          <RiLogoutBoxRFill size="1.4rem" />
          <span className="ms-3">Log Out</span>
        </p>
      </NavLink>
    </div>
  );
};

export default LeftSideBar;
