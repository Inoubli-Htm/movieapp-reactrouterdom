import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardMovie({ movie }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Card.Text>{movie.rate}</Card.Text>
        <Link to={`/trailer/${movie.id}`}>
          <Button variant="primary">Go to Trailer</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CardMovie;
