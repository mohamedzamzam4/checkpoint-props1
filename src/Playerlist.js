import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";
const Playerlist = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.list.photo} />
        <Card.Body>
          <Card.Title>{props.list.name}</Card.Title>
          <Card.Text>
            <h1>{props.list.team}</h1>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <p>Nationality : {props.list.nationality}</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <p>jerseyNumber : {props.list.jerseyNumber}</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <p>Age : {props.list.age}</p>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default Playerlist;
