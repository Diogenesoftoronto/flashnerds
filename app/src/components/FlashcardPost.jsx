import { useState } from "react";
import { Button } from "./Buttons/Button";
import Flashcard from "./Flashcard";
import CommentList from "./CommentList";
import Likes from "./Likes";

function FlashcardPost(props) {

  const {
    question,
    answer,
    deck_id,
    likes,
    onBack,
    onNext } = props;



  return (
    <article class="flashcard-post">
      <Button onClick={() => onBack()}>
        Back
      </Button>
      {/* flex display */}
      <div className="flashcard-content">
      <Flashcard question={question} answer={answer}/>
      <CommentList/>
      <Likes likes={likes}/>
      </div>
      <Button onClick={() => onNext()}>
        Next
      </Button>

    </article>
  );
}

export default FlashcardPost;