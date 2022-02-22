import React, { useState } from 'react';
import Deck from '../components/Deck';

const deckLists = [
  {id: 0, name: "Spanish", image: "https://blog.collinsdictionary.com/wp-content/uploads/sites/39/2020/09/spanish-verbs-1303100365-711-e1623226406354-800x0-c-default.jpg"},
  {id: 1, name: "JavaScript", image: "https://miro.medium.com/max/1400/1*BPSx-c--z6r7tY29L19ukQ.png"},
  {id: 2, name: "English", image: "https://tv-english.club/wp-content/uploads/2016/04/studyingenglish.jpg"},
  {id: 3, name: "Animal", image: "https://img.freepik.com/free-vector/set-wild-animals_1308-25671.jpg"},
  {id: 4, name: "Coffee", image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-how-to-make-coffee-at-home-1587673913.png?crop=1.00xw:0.997xh;0,0&resize=1200:*"}
]

  return (
    <div>
      <h2>My Library</h2>
      {deckList.map(deck => 
        <Deck key={deck.id}
          id={deck.id} 
          name={deck.name} 
          image={deck.image}
        />)}
    </div>
  )


export default MyLibrary