import React from "react";
import Navbar from "./Navbars";
import { Card } from "react-bootstrap";
const Service = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Card className="text-center">
          <Card.Header> Success Story </Card.Header>
          <Card.Body>
            <Card.Title> Special title treatment </Card.Title>
            <Card.Text>
              With supporting text below as a natural lead - in to additional
              content.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted"> 2 days ago </Card.Footer>
        </Card>
        <br />
        <Card className="text-center">
          <Card.Header> Success Story </Card.Header>
          <Card.Body>
            <Card.Title> Special title treatment </Card.Title>
            <Card.Text>
              With supporting text below as a natural lead - in to additional
              content.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted"> 2 days ago </Card.Footer>
        </Card>
      </div>
    </>
  );
};

export default Service;
