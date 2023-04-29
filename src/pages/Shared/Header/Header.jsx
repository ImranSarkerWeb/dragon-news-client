import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment/moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container className="mt-4">
      <div className="text-center">
        <img src={logo} alt="logo" />
        <p className="text-secondary mt-3">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>
          {<span className="fw-bold">{moment().format("dddd")} </span>}
          {moment().format("MMMM D, YYYY")}
        </p>
      </div>
      <div className="d-flex mb-3">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" pauseOnHover="true" speed={100}>
          I can be a React component, multiple React components, or just some
          text..... I can be a React component, multiple React components, or
          just some text....
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
