import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css"
import Jauge from "./Jauge";
import "./CarteFilm.css"

function CarteFilm(props) {

  const handleDelete = (id) => {
    props.setMovies(props.movies.filter(movie => movie.id !== id));
  };

  return (
    <Card className="carte-film">
      <Card.Body>
        <Card.Title >{props.name}</Card.Title>
        <Card.Text>{props.cat}</Card.Text>
      </Card.Body>
      <Card.Footer className="card-footer">
        <Button className="supp-btn" 
         variant="primary" 
         onClick={() => handleDelete(props.id)}>
          Supprimer
        </Button>
        <Jauge className="jauge" 
         likes={props.likes} 
         dislikes={props.dislikes} 
         movies={props.movies} 
         setMovies={props.setMovies}> 
        </Jauge>
      </Card.Footer>
    </Card>
  );
}

export default CarteFilm;