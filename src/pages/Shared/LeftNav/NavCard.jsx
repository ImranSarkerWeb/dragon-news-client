import moment from "moment";
import React from "react";
import first from "../../../assets/1.png";
import second from "../../../assets/2.png";
import third from "../../../assets/3.png";
import { Card, Col, Row } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";

const NavCard = () => {
  return (
    <Row xs={1} md={1} lg={1} className="g-4 mt-4">
      <Col>
        <Card>
          <Card.Img variant="top" src={first} />
          <Card.Body>
            <Card.Title>
              21 The Most Stylish Wedding Guest Dresses For Spring
            </Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <p>
              <FaCalendarAlt></FaCalendarAlt> {moment().format("yyyy-MMM-d")}
            </p>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={second} />
          <Card.Body>
            <Card.Title>
              21 The Most Stylish Wedding Guest Dresses For Spring
            </Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <p>
              <FaCalendarAlt></FaCalendarAlt> {moment().format("yyyy-MMM-d")}
            </p>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={third} />
          <Card.Body>
            <Card.Title>
              21 The Most Stylish Wedding Guest Dresses For Spring
            </Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <p>
              <FaCalendarAlt></FaCalendarAlt> {moment().format("yyyy-MMM-d")}
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default NavCard;
