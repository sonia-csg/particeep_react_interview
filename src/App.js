import './App.css';
import CarteFilm from './CarteFilm';
import CardGroup from 'react-bootstrap/CardGroup';
import React, { useState, useEffect } from 'react';
import { movies$ } from './movies';
import { CardDeck } from 'react-bootstrap';

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function myFunction() {
      // Supposons que votre promesse soit stockée dans une variable appelée myPromise
      const result = await movies$  ;
      // result contient le tableau résolu de la promesse
      console.log(result);
      // Vous pouvez maintenant accéder à chaque élément du tableau en utilisant des boucles ou des indices
      console.log(result[0]); // affichera le premier objet de film dans le tableau
      setMovies(result);
  
    }

    myFunction()
    }, []);

//console.log("fin",movies)


  return (
    <CardGroup>
    
      
    <div className='grid'>
      
      {movies.map(movie => (
       <CarteFilm name={movie.title} id={movie.id} cat={movie.category} likes={movie.likes} dislikes={movie.dislikes} movies={movies} setMovies={setMovies} />
      ))}
      
    </div>
      
    </CardGroup>
  
  );
}

export default App;
   
/*
       
<div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.category}</p>
          <p>Likes: {movie.likes}</p>
          <p>Dislikes: {movie.dislikes}</p>
        </div>

*/
/*
import { Card, CardDeck } from 'react-bootstrap';
<CardDeck>
      {movies.map(film => (
        <Card key={film.id} style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title><strong>{film.title}</strong></Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{film.category}</Card.Subtitle>
            <Card.Text>Ratio likes/dislikes</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </CardDeck>*/
/*

 <MDBCardGroup>
     <MDBCard>
         <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

    </MDBCardGroup>*/