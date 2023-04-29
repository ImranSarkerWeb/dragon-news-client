import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment/moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link, NavLink } from "react-router-dom";

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

      <Navbar
        className="mb-5"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-decoration-none"
                      : "text-decoration-none text-black"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Profile</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button variant="secondary">Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
