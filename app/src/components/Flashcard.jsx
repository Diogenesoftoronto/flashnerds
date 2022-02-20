import { React, useState } from "react";
import ReactCardFlip from 'react-card-flip';

function Flashcard(props) {
  const { question, answer } = props;

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <div class="flashcard">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">

        <div class="flashcard-content" id="front">
          <h2>Question</h2>
          {question}
          <img src="./flip-arrow.png" onClick={handleClick} />
        </div>

        <div class="flashcard-content" id="back">
          <h2>Answer</h2>
          {answer}
          <img src="./flip-arrow.png" onClick={handleClick} />
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default Flashcard;