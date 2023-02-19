import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./CarteFilm.css"

function Filter(props) {
//une fonction qui gère la sélection des catégories
const handleCategoryFilter = (event) => {
    const options = Array.from(event.target.options); 
    const selected = options.filter(o => o.selected).map(o => o.value)
    props.setSelectedCategories(selected);
};

  return (
    <select className='select-categorie' onChange={handleCategoryFilter}  >
    {props.allCategories.map((category) => (
      <option key={category} value={category}>
        {category}
      </option>
    ))}
  </select>
  );
}

export default Filter;