import React from "react";
  import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css"
import { useState} from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import CardGroup from 'react-bootstrap/CardGroup';
import { BsFillHandThumbsDownFill,BsFillHandThumbsUpFill } from "react-icons/bs";

function Jauge(props) {
  
  const [likeCount, setLikeCount] = useState(props.likes);
  const [dislikeCount, setDislikeCount] = useState(props.dislikes);


  const handleLikeClick = () => {
   

    
      setLikeCount(likeCount + 1);
     
      return;
    


  };

  const handleDisikeClick = () => {
   
    
    
      setDislikeCount(dislikeCount + 1);
     
      return;
    

  
  };
    return (
      <div>
        
      <Button variant="outline-secondary" icon="" onClick={handleLikeClick}>   <BsFillHandThumbsUpFill></BsFillHandThumbsUpFill>{likeCount} </Button>
      <Button variant="outline-secondary" icon="" onClick={handleDisikeClick}> <BsFillHandThumbsDownFill></BsFillHandThumbsDownFill>{dislikeCount}</Button>
      

      </div>
  );
}

export default Jauge;