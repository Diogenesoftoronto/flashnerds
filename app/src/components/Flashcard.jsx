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
{/* do not use id and remember to use className and not class*/}
        <div className="flashcard-content front">
          <h2>Question</h2>
          {question}
          <img src="./flip-arrow.png" alt="Flip Arrow" onClick={handleClick} />
        </div>

        <div className="flashcard-content back">
          <h2>Answer</h2>
          {answer}
          <img src="./flip-arrow.png" alt="Flip arrow" onClick={handleClick} />
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default Flashcard;