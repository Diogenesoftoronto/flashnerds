import React, { useState, useEffect } from 'react';
import Deck from '../components/Deck';
import '../App.css';
import './MyLibrary.scss';
import axios from "axios"

const deckLists = [
  {id: 0, name: "Spanish", image: "https://blog.collinsdictionary.com/wp-content/uploads/sites/39/2020/09/spanish-verbs-1303100365-711-e1623226406354-800x0-c-default.jpg"},
  {id: 1, name: "JavaScript", image: "https://miro.medium.com/max/1400/1*BPSx-c--z6r7tY29L19ukQ.png"},
  {id: 2, name: "English", image: "https://tv-english.club/wp-content/uploads/2016/04/studyingenglish.jpg"},
  {id: 3, name: "Animal", image: "https://img.freepik.com/free-vector/set-wild-animals_1308-25671.jpg"},
  {id: 4, name: "Coffee", image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-how-to-make-coffee-at-home-1587673913.png?crop=1.00xw:0.997xh;0,0&resize=1200:*"}
]

function MyLibrary () {
  const [deckList, setDeckList] = useState([]);
  useEffect (() => {
      axios.get("http://localhost:3001/api/decks") 
      .then((response) => {
        console.log("hello", response);
        setDeckList(response.data.dbRes);
      })
  }, [])

  const deleteFromDeckLists = (id) => {
    let temp = [...deckList];
    const targetDeck = temp.filter(deck => deck.id === id)[0];
    if (targetDeck) {
      const index = temp.indexOf(targetDeck);
      temp.splice(index, 1);
      setDeckList(temp);
    } else {
      console.error('target deck is not found');
    }
  }

  const goToPlayFlashcard = (id) => { 


  }

  return (
    <div className="deck-lists">
      <h2>My Library</h2>
      <div className="deck">
        <div className="deck__content" onClick={goToPlayFlashcard}>
          {deckList.map(deck => 
            <Deck key={deck.id}
              id={deck.id} 
              name={deck.name} 
              image={deck.image}
              onDeleteBtnClick={ deleteFromDeckLists } 
            />)}
        </div>
      </div>
    </div>
  )
}

export default MyLibrary