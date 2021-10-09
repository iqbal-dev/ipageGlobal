import React from "react";
import { Col, Row } from "react-bootstrap";
import Header from "../../components/Header/Header";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import Main from "../../components/Main/Main";
import RightSidebar from "../../components/RightSideBar/RightSidebar";
import "./Home.css";
const home = () => {
  return (
    <div>
      <Header />
      <Row className="home__container justify-content-between">
        <Col md={2} className="border-end pe-0">
          <LeftSideBar />
        </Col>
        <Col md={6}>
          <Main />
        </Col>
        <Col md={3}>
          <RightSidebar />
        </Col>
      </Row>
    </div>
  );
};

export default home;
