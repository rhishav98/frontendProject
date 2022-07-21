import React from "react";
import { Card } from "react-bootstrap";
import Button from "./Button";
const CardModel = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <Card>
          <Card.Img variant="top" src={props.imgsrc} />
          <Card.Body>
            <Card.Title> {props.title} </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card 's content.
            </Card.Text>
            {/* <Button variant="primary" NavLink to="">
              Add now
            </Button> */}
            <Button />
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default CardModel;
