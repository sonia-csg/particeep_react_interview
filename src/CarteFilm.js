import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css"
import Jauge from "./Jauge";

function CarteFilm(props) {
  const handleDelete = (id) => {
    props.setMovies(props.movies.filter(movie => movie.id !== id));
  };
    console.log(props)
    return (
     
      <Card>
       
        <Card.Body>
          <Card.Title >{props.name}</Card.Title>
          <Card.Text>
          {props.cat}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        
           
           <Button variant="primary" onClick={() => handleDelete(props.id)}>Supprimer</Button>
            <Jauge likes={props.likes} dislikes={props.dislikes} movies={props.movies} setMovies={props.setMovies}></Jauge>       
         
        </Card.Footer>
      </Card>
   

      
  );
}

export default CarteFilm;