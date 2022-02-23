import { React, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Button } from "./Buttons/Button";
import classNames from "classnames";

import "./styles/Flashcard.scss";
import { AnswerForm } from "./AnswerForm";
import { styled } from "@stitches/react";



function Flashcard(props) {
  const { question, answer, isFlipped, setIsFlipped} = props;
  // const setState = (val) => state = val; 
  // const [isFlipped, setIsFlipped] = useState(isFlipped);     
  const [answerState, setAnswerState] = useState("");
  function findAnswer(userAnswer, answer){
    // const found = answer.includes(`${userAnswer}`)
    // if (!found) return false
    return true
  }

  const flashcardClass = classNames("flashcard-container", {
    flipped: isFlipped,
  });

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  // $(".flippable").click(function(){
  //   $(this).toggleClass("flipme");
  // });
  const Back = styled("div", {
    variant: {
      variant: {
        correct: {
          backgroundColor: "green",
          },
        incorrect: {
          backgroundColor: "red",
          }
        }
     }
});

  const flashcardBack = (findAnswer(answerState, answer) ?  (<div className="flashcard back" style={{backgroundColor: "green"}}>
  <header>
    <h2>Answer</h2>
  </header>
  <span>{answer}</span>
  <Button variant={"mauve"} onClick={handleClick}>
    Flip
  </Button>
</div> ): (
  <div className="flashcard back" style={{backgroundColor: "red"}}>
{/* <Back variant="incorrect" > */}
  <header>
    <h2>Answer</h2>
    </header>
    <span>{answer}</span>
    <Button variant={"mauve"} onClick={handleClick}>
      Flip
      </Button>
      {/* </Back> */}
      </div>
      ));
  return (
    // <div className={flashcardClass}>
    <ReactCardFlip
      className="flashcard-container"
      isFlipped={isFlipped}
      flipDirection="horizontal"
    >
      {/* do not use id and remember to use className and not class*/}

      <div className="flashcard front">
        <header>
          <h2>Question</h2>
        </header>
        <span>
          {question}
          <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
            <input
              type="text"
              name="answer"
              placeholder="What's your guess nerd?"
              onChange={(event) => setAnswerState(event.target.value)}
              value={answerState}
            />
          </form>
        </span>
        {/* <img src="./flip-arrow.png" alt="Flip Arrow" onClick={handleClick} /> */}
        <Button variant={"mauve"} onClick={handleClick}>
          Flip
        </Button>
      </div>

    {flashcardBack}
    </ReactCardFlip>
    //{/* </div> */}
  );
}

export default Flashcard;
