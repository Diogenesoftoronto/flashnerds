import { useState } from "react";
import Button from "./Button";
import Flashcard from "./Flashcard";

function FlashcardPost(props) {

  const {question, answer, deck_id, likes } = props;



  return (
    <article class="flashcard-post">
      <Button action={() => {}} color={"grey"} label="Back"/>
      {/* flex display */}
      <div className="flashcard-content">
      <Flashcard question={question} answer={answer}/>
      {/* pulldown menu for comments */}
      {/* <Comments></Comments> */}
      {/* like heart */}
      </div>
      <Button action={() => {}} color={"grey"} label="Next"/>

    </article>
  );
}

export default FlashcardPost;