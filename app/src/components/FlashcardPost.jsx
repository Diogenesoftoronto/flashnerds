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

   const [isFlipped, setIsFlipped] = useState(false);

   const nextCard = () => {
     setIsFlipped(false);
     onNext()
   }
   const backCard = () => {
     setIsFlipped(false);
     onBack()
   }

  return (
    <article class="flashcard-post">
      <div className="top">

      <Button variant='violet' onClick={() => backCard()}>
        Back
      </Button>
      {/* flex display */}
      <div className="flashcard-content">
      <Flashcard question={question} answer={answer} isFlipped={isFlipped} setIsFlipped={setIsFlipped}/>
      <TagList tags={tags}/>
      <CommentList comments={comments}/>
      <Likes likes={likes}/>
      </div>
      <Button variant='violet' onClick={() => nextCard()}>
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