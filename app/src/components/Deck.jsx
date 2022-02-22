import { React, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";


  return (
    <div className="deck">
      <div className="deck-item">
        <img src={ props.image } alt={ props.name }/>
        <p>{ props.name }</p>
      </div>
    </div>
  )


export default Deck;