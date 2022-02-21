import { React } from "react";

const deckLists = [
  {id: 0, name: "Spanish", image: "https://blog.collinsdictionary.com/wp-content/uploads/sites/39/2020/09/spanish-verbs-1303100365-711-e1623226406354-800x0-c-default.jpg"},
  {id: 1, name: "JavaScript", image: "https://miro.medium.com/max/1400/1*BPSx-c--z6r7tY29L19ukQ.png"},
  {id: 2, name: "English", image: "https://tv-english.club/wp-content/uploads/2016/04/studyingenglish.jpg"},
  {id: 3, name: "Animal", image: "https://img.freepik.com/free-vector/set-wild-animals_1308-25671.jpg"},
  {id: 4, name: "Coffee", image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-how-to-make-coffee-at-home-1587673913.png?crop=1.00xw:0.997xh;0,0&resize=1200:*"}
]

const DeckLists = () => {
  return (
    <div>
      {deckLists.map((deck) => {
        return (
          <div>
            <img src={ deck.image } alt={ deck.name }/>
            <p>{ deck.name }</p>
          </div>
        )
      })}
    </div>
  )
}

export default DeckLists;