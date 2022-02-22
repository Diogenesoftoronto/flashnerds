import { React, useState } from "react";
import ReactCardFlip from 'react-card-flip';
import { Button } from "./Buttons/Button";
import classNames from 'classnames';

import './styles/Flashcard.scss';
import { AnswerForm } from "./AnswerForm";

function Flashcard(props) {
  const { question, answer } = props;
  
  const [isFlipped, setIsFlipped] = useState(false);

  const flashcardClass = classNames("flashcard-container", {
    "flipped": isFlipped 
  });


  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }
  // $(".flippable").click(function(){
  //   $(this).toggleClass("flipme");
  // });
  return (
    
    // <div className={flashcardClass}>
      <ReactCardFlip className="flashcard-container" isFlipped={isFlipped} flipDirection="horizontal">

{/* do not use id and remember to use className and not class*/}

        <div className="flashcard front">
          <header><h2>Question</h2></header>
          <span>
          {question}
          <AnswerForm />
          </span>
          {/* <img src="./flip-arrow.png" alt="Flip Arrow" onClick={handleClick} /> */}
          <Button variant={'mauve'} onClick={handleClick} >Flip</Button>
        </div>

        <div className="flashcard back">
        <header><h2>Answer</h2></header>
          <span>
          {answer}
          </span>
          {/* instead of flip arrow png change to svg or have button that changes state */}
          {/* <img src="./flip-arrow.png" alt="Flip arrow" onClick={handleClick} /> */}
          <Button variant={'mauve'} onClick={handleClick} >Flip</Button>
        </div>

      </ReactCardFlip>
    //{/* </div> */}
  );
}

export default Flashcard;