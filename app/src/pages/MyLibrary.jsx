import React, { useState, useEffect } from 'react';
import { useAuth } from "../contexts/AuthContext";
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

  // const userId = useAuth().currentUser.id;
  const userId = 1;



  console.log(useAuth());

  const [deckList, setDeckList] = useState([]);
  
    useEffect (() => {
      axios.get(`http://localhost:3001/api/decks/user/${userId}`) 
      .then((response) => {
        console.log("hello", response);
        setDeckList(response.data);
      })
      .catch((err) => console.err('invalid request'))
    }, [])
  

  const deleteFromDeckLists = (id) => {
    let temp = [...deckList];
    console.log('hi2')
    if (temp.length === 0) return;
    console.log('hi')
    const targetDeck = temp.filter(deck => deck.id === id)[0];
    if (targetDeck) {
      const index = temp.indexOf(targetDeck);
      temp.splice(index, 1);
      setDeckList(temp);
    } else {
      console.error('target deck is not found');
    }

    axios.delete(`http://localhost:3001/api/decks/${id}`)
    .then(()=> console.log('successful delete',id)); 
  }
  const isEmpty = deckList.length === 0;
  // let deckComponents = <Deck
  // key={0}
  // name={'Create new deck'}
  // image={"https://i.imgflip.com/66d0at.jpg"}
  // onDeleteBtnClick={() => {}}
  // />;

let deckComponents;
console.log('decks', deckList);

  if (!isEmpty) {

    deckComponents = deckList.map(deck => 
      <Deck key={deck.id}
      id={deck.id} 
      name={deck.name} 
      image={deck.image}
      onDeleteBtnClick={ deleteFromDeckLists }/>);
  } else{
      deckComponents = <Deck
      key={-1}
      id={0}
      name={'No decks???'}
      image={"https://i.imgflip.com/66d0at.jpg"}
      onDeleteBtnClick={() => {}}
      />
    }


      

  return (
    <div className="my-library">
      <div className="my-library__header">
        <h2>My Library📚</h2>
      </div>
      <div className="my-library__deck-lists">
        <div className="my-library__deck-lists__title">
          <h3>My Decks</h3>
        </div>
        <div className="my-library__deck-lists__content">
          {deckComponents}
        </div>
        {/* <div className="deck">
          <div className="deck__content">
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default MyLibrary