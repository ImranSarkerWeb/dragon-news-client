import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import rightNavBg from "../../../assets/bg.png";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Qzone from "../QZone/Qzone";

const RightNav = () => {
  return (
    <div>
      <div className="mb-3">
        <h4>Login With</h4>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle /> Login With Google
        </Button>
        <Button variant="outline-secondary">
          <FaGithub /> Login With Github
        </Button>
      </div>
      <div>
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Qzone />
      <div className="position-relative">
        <img className="w-100 " src={rightNavBg} alt="" />
        <div className="position-absolute top-0 p-5 my-5 text-center text-white">
          <h2>Create an Amazing Newspaper</h2>
          <p className="my-4">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <Button variant="danger">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
