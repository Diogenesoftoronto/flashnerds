import { useState } from "react";
import { Button } from "./Buttons/Button";
import Flashcard from "./Flashcard";
import CommentList from "./CommentList";
import Likes from "./Likes";
import './styles/FlashcardPost.scss';

function FlashcardPost(props) {

  const {
    question,
    answer,
    deckId,
    likes,
    onBack,
    onNext,
    comments
   } = props;

  return (
    <article class="flashcard-post">
      <div className="top">

      <Button variant='violet' onClick={() => onBack()}>
        Back
      </Button>
      {/* flex display */}
      <div className="flashcard-content">
      <Flashcard question={question} answer={answer}/>
      </div>
      <Button variant='violet' onClick={() => onNext()}>
        Next
      </Button>
      </div>
    <footer>
      <Likes likes={likes}/>
      <CommentList comments={comments}/>
    </footer>
    </article>
  );
}

export default FlashcardPost;