import './App.css';
import CarteFilm from './CarteFilm';
import React, { useState, useEffect } from 'react';
import { movies$ } from './movies';
import Pagination from './Pagination';
import "./index.css"

function App() {

 //les états initiaux
  const [movies, setMovies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [elementsPerPage, setElementsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [allCategories, setAllCategories] = useState([]);

  //Récupérer les données depuis le tableau
  useEffect(() => {
    async function fetchData() {
      const result = await movies$;
      setMovies(result);
    }
    fetchData();
  }, []);

//Récupérer les catégories des movies
  useEffect(() => {
    const categoriesObj = movies.reduce((acc, curr) => {
      (curr.category ? [curr.category] : []).forEach((category) => {
        acc[category] = true;
      });
      return acc;
    }, {});
    const categories = Object.keys(categoriesObj);
    setCategories(categories);
  }, [movies]);

  //filtrer les movies en fonction des catégories sélectionnées
  useEffect(() => {
    const filteredMovies = movies.filter((movie) => {
      if (selectedCategories.length === 0) {
        return true;
      }
      return selectedCategories.includes(movie.category);
    });
    const categoriesObj = filteredMovies.reduce((acc, curr) => {
      (curr.category ? [curr.category] : []).forEach((category) => {
        acc[category] = true;
      });
      return acc;
    }, {});
    const categories = Object.keys(categoriesObj);
    setCategories(categories);
    setAllCategories(categories);
  }, [movies]);

  //une fonction qui gère la sélection des catégories
  const handleCategoryFilter = (event) => {
    const options = event.target.options;
    
    const selected = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selected.push(options[i].value);
      }
    }
    setSelectedCategories(selected);
   
  };

// Filtrer les movies en fonction des catégories sélectionnées et de la page actuelle
  const filteredMovies = movies
  .filter((movie) => {
    if (selectedCategories.length === 0) {
      return true;
    }
    return selectedCategories.includes(movie.category);
  })
  .slice((currentPage - 1) * elementsPerPage, currentPage * elementsPerPage);
  
  
  
  return (
    <div className='super'>
     
     
      <select className='select-categorie' onChange={handleCategoryFilter}  >
        {allCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <div className='grid'>
    
      {filteredMovies.map(movie => (
       <CarteFilm  name={movie.title} id={movie.id} cat={movie.category} likes={movie.likes} dislikes={movie.dislikes} movies={movies} setMovies={setMovies} />
      ))}
       
    </div>
 
   
    <Pagination currentPage={currentPage} elementsPerPage={elementsPerPage} setElementsPerPage={setElementsPerPage} size={filteredMovies.length} setCurrentPage={setCurrentPage}></Pagination>   
     
    
 </div>
    );
}

export default App;
   
