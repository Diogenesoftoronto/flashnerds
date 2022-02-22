import { React, useState } from "react";
import { useNavigate } from "react-router-dom";


const deckLists = [
  {id: 0, name: "Spanish", image: "https://blog.collinsdictionary.com/wp-content/uploads/sites/39/2020/09/spanish-verbs-1303100365-711-e1623226406354-800x0-c-default.jpg"},
  {id: 1, name: "JavaScript", image: "https://miro.medium.com/max/1400/1*BPSx-c--z6r7tY29L19ukQ.png"},
  {id: 2, name: "English", image: "https://tv-english.club/wp-content/uploads/2016/04/studyingenglish.jpg"},
  {id: 3, name: "Animal", image: "https://img.freepik.com/free-vector/set-wild-animals_1308-25671.jpg"},
  {id: 4, name: "Coffee", image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-how-to-make-coffee-at-home-1587673913.png?crop=1.00xw:0.997xh;0,0&resize=1200:*"}
]

const DeckLists = () => {
  const navigate= useNavigate();

  const handleClick = () => {
    navigate("/");
  }

  const [edit, setEdit] = useState(false);
  const handleOnEdit = (value) => {
    const



  }

  const [remove, setRemove] = useState();
  const handleClickRemove = (i) => {
    const newdeckLists = [...remove];
    newdeckLists.splice(i, 1);
    setRemove(newdeckLists);
  }

  return (
    <div>
      {deckLists.map((deck) => {
        return (
          <div className="deck">
            <div className="deck-item" onClick={handleClick}>
              <input type="text" value={ deck.name } onChange={(e) => e.preventDefault()}>
              <img src={ deck.image } alt={ deck.name }/>
            </div>
            <div className="button">
              <button onClick={handleOnEdit}>Edit</button>
              <button onClick={handleClickRemove}>X</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default DeckLists;