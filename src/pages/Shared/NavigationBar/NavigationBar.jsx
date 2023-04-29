import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { AuthContex } from "../../../providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const NavigationBar = () => {
  const { user } = useContext(AuthContex);
  return (
    <Container>
      <Navbar
        className="mb-5"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto d-flex gap-2 text-decoration-none">
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

            <NavLink>About</NavLink>
            <NavLink>Career</NavLink>
          </Nav>
          <Nav>
            {user && (
              <Nav.Link href="#deets">
                <FaUserCircle style={{ fontSize: "1.5rem" }} />
              </Nav.Link>
            )}

            {user ? (
              <Button variant="secondary">LogOut</Button>
            ) : (
              <Link to="/login">
                {" "}
                <Button variant="secondary">Login</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
