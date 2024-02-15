// MovieCard.js
import React from 'react';
import Card from 'react-bootstrap/Card';


const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Card>
        <Card.Img variant="top" src={movie.posterURL} className="card-img-top" />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            <p>{movie.description}</p>
            <p><strong>Rating:</strong> {movie.rating}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
