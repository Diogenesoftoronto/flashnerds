import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import FlashcardPost from '../components/FlashcardPost';
import { useParams } from "react-router-dom";
import axios from "axios";


// const comments = [
//   {
//     id: 1,
//     avatar: "https://i.imgur.com/LpaY82x.png",
//     userName: "Bobby",
//     content: "This is a comment.",
//     likes: 20,
//     timestamp: 1645483654553
//   },
//   {
//     id: 2,
//     avatar: "https://i.imgur.com/LpaY82x.png",
//     userName: "Bobby's Twin",
//     content: "This is another comment.",
//     likes: 200,
//     timestamp: 1645483650000
//   }
// ];
const comments = [
  {
    id: 1,
    avatar: "https://i.imgur.com/LpaY82x.png",
    name: "Bobby",
    content: "This is a comment.",
    likes: 20,
    post_time: '2021-03-18 21:50:39'
  },
  {
    id: 2,
    name: "Bobby's Twin",
    content: "This is another comment.",
    likes: 200,
    timestamp: '2021-03-05 02:29:08'
  }
];

const question = "Question";
const answer = "Answer";
const likes = 0;
const tags = [
  {
    tagId: 1,
    text: "tag1",
  },
  {
    tagId: 2,
    text: "tag2",
  },
  {
    tagId: 3,
    text: "tag3",
  },
];


function PlayFlashcard() {
  // const [startTransition, isPending] = useTransition(,3000)

  const { id } = useParams();
  // const { currentUser } = useAuth();
  const [flashcard, setFlashcard] = useState({});
  const [deck, setDeck] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);

  const shuffleDeck = (deck) => {
    for (let i = deck.length - 1; i > 0; i--) {

      // Generate random number
      let j = Math.floor(Math.random() * (i + 1));

      let temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
    }

    return deck;
  }


  useEffect(() => {
    axios.get(`http://localhost:3001/api/flashcards/deck/${id}`)
      .then((response) => {
        // {id: 1, decks_id: 1, question: 'In sagittis dui vel nisl.', answer: 'scelerisque', likes: 1}
        const baseDeck = response.data.dbRes;
        setDeck(shuffleDeck(baseDeck));
        console.log("deck", deck);

        return baseDeck;
      })
      .then((deck) => {
        setFlashcard(deck[cardIndex]);
      });

  }, []);

  const deckLength = deck.length;
  console.log('length', deckLength);

  const nextCard = () => {
      setCardIndex((cardIndex + 1) % deckLength);
      setFlashcard(deck[cardIndex]);
  }

  const backCard = () => {
    let i = (cardIndex - 1) % deckLength;

    if (i === -1) {
      i = deckLength - 1;
    }
    console.log('i',i);
      setCardIndex(i);
      // setCardIndex((cardIndex - 1) % deckLength);
      setFlashcard(deck[cardIndex]);
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