import { useState } from "react";
import { Button } from "./Buttons/Button";
import Flashcard from "./Flashcard";
import CommentList from "./CommentList";
import Likes from "./Likes";
import { styled } from "@stitches/react";
import { TagList } from "./tag/tagList";
import './styles/FlashcardPost.scss';

function FlashcardPost(props) {

  const {
    question,
    answer,
    deckId,
    likes,
    tags,
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
      <TagList tags={tags}/>
      <CommentList comments={comments}/>
      <Likes likes={likes}/>
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