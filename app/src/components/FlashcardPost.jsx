import React, { useState } from "react";
import { Button } from "./Buttons/Button";
import Flashcard from "./Flashcard";
// import CommentList from "./CommentList";
import Comments from "./comments";
import Likes from "./Likes";
import { styled } from "@stitches/react";
import { TagList } from "./tag/tagList";
import './styles/FlashcardPost.scss';
import CommentList from "./comments/CommentList";
import Comment from "./comments";
import PostComment from './comments/Post';



function FlashcardPost(props) {

  const {
    question,
    answer,
    deckId,
    tags,
    onBack,
    onNext,
    comments
   } = props;

   const [isFlipped, setIsFlipped] = useState(false);

   const nextCard = () => {
     setIsFlipped(false);
     setTimeout(() => {
       onNext()
     }, 500)
   }
   const backCard = () => {
     setIsFlipped(false);
     setTimeout(() => {
      onBack()
    }, 500)
   }

  return (
    <article className="flashcard-post">
      <div className="top">

      <Button variant='violet' onClick={() => backCard()}>
        Back
      </Button>
      {/* flex display */}
      <div className="flashcard-content">
      <Flashcard question={question} answer={answer} isFlipped={isFlipped} setIsFlipped={setIsFlipped}/>
      <TagList tags={tags}/>
      <PostComment />
      <CommentList comments={comments}/>
      {/* <Likes likes={likes}/> */}
      </div>
      <Button variant='violet' onClick={() => nextCard()}>
        Next
      </Button>
      </div>
    {/* <footer>
      <Likes likes={likes}/>
      <CommentList comments={comments}/>
    </footer> */}
    </article>
  );
}

export default FlashcardPost;