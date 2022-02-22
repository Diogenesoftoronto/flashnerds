import { useState } from "react";
import { Button } from "./Buttons/Button";
import Flashcard from "./Flashcard";
import CommentList from "./CommentList";
import Likes from "./Likes";
import { styled } from "@stitches/react";

function FlashcardPost(props) {

  const {
    question,
    answer,
    deck_id,
    likes,
    onBack,
    onNext,
    comments
   } = props;

  return (
    <article class="flashcard-post">
      <Button variant='violet' onClick={() => onBack()}>
        Back
      </Button>
      {/* flex display */}
      <div className="flashcard-content">
      <Flashcard question={question} answer={answer}/>
      <CommentList comments={comments}/>
      <Likes likes={likes}/>
      </div>
      <Button variant='violet' onClick={() => onNext()}>
        Next
      </Button>

    </article>
  );
}

export default FlashcardPost;