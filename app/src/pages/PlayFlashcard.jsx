import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import FlashcardPost from '../components/FlashcardPost';
import { useParams } from "react-router-dom";
import axios from "axios"


const comments = [
  {
    id: 1,
    avatar: "https://i.imgur.com/LpaY82x.png",
    userName: "Bobby",
    content: "This is a comment.",
    likes: 20,
    timestamp: 1645483654553
  },
  {
    id: 2,
    avatar: "https://i.imgur.com/LpaY82x.png",
    userName: "Bobby's Twin",
    content: "This is another comment.",
    likes: 200,
    timestamp: 1645483650000
  }
];

const question = "Question";
const answer = "Answer";
const likes = 0;
const tags= ['tag1,', 'tag2'];


function PlayFlashcard() {
  const { id } = useParams();
  // const { currentUser } = useAuth();
  const [flashcard, setFlashcard] = useState({});
  const [deck, setDeck] = useState([]);

  let cardIndex = 0;
  
  
  useEffect (() => {
    axios.get(`http://localhost:3001/api/flashcards/deck/${id}`) 
    .then((response) => {
      // {id: 1, decks_id: 1, question: 'In sagittis dui vel nisl.', answer: 'scelerisque', likes: 1}
      setDeck(response.data.dbRes);
      console.log("deck", deck);
    })
  }, []);

  const deckLength = deck.length;

  const nextCard = () => {
    cardIndex++;
    setFlashcard(deck[cardIndex % deckLength]);
  }

  const backCard = () => {
    cardIndex++;
    setFlashcard(deck[cardIndex % deckLength]);
  }


  return (
    <div>
      <FlashcardPost
        question={flashcard.question}
        answer={flashcard.answer}
        likes={flashcard.likes}
        tags={tags}
        onBack={backCard}
        onNext={nextCard}
        comments={comments}
        />
    </div>
  );

}

export default PlayFlashcard