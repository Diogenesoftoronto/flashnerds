import { React, useState } from "react";
import ReactCardFlip from 'react-card-flip';

function Flashcard(props) {
  const { question, answer } = props;

  [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <ReactCardFlip isFlipped flipDirection="horizontal">
      <div class="flashcard">
        <div class="flashcard-content" id="front">
          <h2>Question</h2>
          {question}
        </div>
        <div class="flashcard-content" id="back">
          <h2>Answer</h2>
          {answer}
        </div>
      </div>
    </ReactCardFlip>
  );
}