import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import './DeckCreate.scss'

function DeckCreate() {

  const { currentUser } = useAuth();

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [q1, setQ1] = useState();
  const [a1, setA1] = useState();
  const [q2, setQ2] = useState();
  const [a2, setA2] = useState();
  const [q3, setQ3] = useState();
  const [a3, setA3] = useState();
  // const cloud_name = "dbbnv85af";
  // const upload_preset = "daxonv2q";
  // to upload image onthe browser
  // const handleClick = () => {
  //   const { files } = document.querySelector(".uploadInput");
  //   const formData = new FormData();
  //   formData.append("file", files[0]);
  //   formData.append("upload_preset", upload_preset);
  //   const options = {
  //    method: "POST",
  //    body: formData,
  //   };
  //   return fetch(`https://api.Cloudinary.com/v1_1/${cloud_name}/image/upload`, options
  //  )
  //   .then((res) => res.json())
  //   .then((res) => {
  //     setImageUrl(res.secure_url);
  //    })
  //    .catch((err) => console.log(err));
  //  }

  // .catch(()=> console.log(a1,q2))

  // })
  // .then((deckId) => {
  //   const firstCard = {
  //     deckId,
  //     question: q1,
  //     answer: a1
  //   }
  //   const secondCard = {
  //     deckId,
  //     question: q2,
  //     answer: a2
  //   }
  //   const thirdCard = {
  //     deckId,
  //     question: q3,
  //     answer: a3
  //   }
  //   Promise.all([
  //     axios.post('http://localhost:3001/api/flashcards', firstCard),
  //     axios.post('http://localhost:3001/api/flashcards', secondCard),
  //     axios.post('http://localhost:3001/api/flashcards', thirdCard)
  //   ])
  //   .then(res => console.log('wow it worked'))
  //   .catch(err => console.log('oof'));



  // })
  // .catch(()=> console.log(a1,q2))

  const navigate = useNavigate();

  if (!currentUser) {
    navigate('/login')
  }

  const userId = currentUser ? currentUser.id : 1;


  const handleBtnCreateClick = () => {
    // let deckId = 1;
    const data = { image, name, userId }
    axios.post('http://localhost:3001/api/decks/', data)
      .then((response) => {
        axios.get('http://localhost:3001/api/decks/')
        .then((res) => {
            console.log('res', res.data.dbRes);
            return res.data.dbRes.length;
          })
          .then((deckId) => {
            const firstCard = {
              deckId,
              question: q1,
              answer: a1
            }
            const secondCard = {
              deckId,
              question: q2,
              answer: a2
            }
            const thirdCard = {
              deckId,
              question: q3,
              answer: a3
            }
            Promise.all([
              axios.post('http://localhost:3001/api/flashcards', firstCard),
              axios.post('http://localhost:3001/api/flashcards', secondCard),
              axios.post('http://localhost:3001/api/flashcards', thirdCard)
            ])
              .then(res => console.log('wow it worked'))
              .catch(err => console.log('oof'));
          })
      });
  }

  return (
    <div className="create-deck">
      <h1>Create New Deck</h1>
      <div>
        <label for="deck-title">Deck Title:</label>
        <input type="text"
          name="deck-title"
          value={name}
          onChange={(event) => setName(event.target.value)}
          id="deck-title" />
      </div>
      <div>
        <label for="Image-Url">Image URL: </label>
        <input type="text"
          name="image"
          value={image}
          onChange={(event) => setImage(event.target.value)}
          id="image" />
      </div>

      <div className="flashcards-data">
        <article className="flashcard-single-data">

          <div>
            <label for="question1">Question 1: </label>
            <input type="text"
              name="question1"
              value={q1}
              onChange={(event) => setQ1(event.target.value)}
              id="question1" />
          </div>
          <div>
            <label for="answer1">Answer 1: </label>
            <input type="text"
              name="answer 1"
              value={a1}
              onChange={(event) => setA1(event.target.value)}
              id="answer1" />
          </div>
        </article>
        <div className="flashcards-data">
          <article className="flashcard-single-data">

            <div>
              <label for="question2">Question 2: </label>
              <input type="text"
                name="question2"
                value={q2}
                onChange={(event) => setQ2(event.target.value)}
                id="question2" />
            </div>
            <div>
              <label for="answer2">Answer 2: </label>
              <input type="text"
                name="answer 2"
                value={a2}
                onChange={(event) => setA2(event.target.value)}
                id="answer2" />
            </div>
          </article>
          <article className="flashcard-single-data">

            <div>
              <label for="question3">Question 3: </label>
              <input type="text"
                name="question3"
                value={q3}
                onChange={(event) => setQ3(event.target.value)}
                id="question3" />
            </div>
            <div>
              <label for="answer3">Answer 3: </label>
              <input type="text"
                name="answer 3"
                value={a3}
                onChange={(event) => setA3(event.target.value)}
                id="answer3" />
            </div>
          </article>
        </div>
      </div>
      {/* <div className="imageUpload">
        <input type="file" className="uploadInput" />
        <img src={imageUrl} className="uploadedImg" alt="" />
        <button className="uploadButton" onClick={() => {}}>Save</button>
      </div> */}
      <button className="createButton" onClick={handleBtnCreateClick}>Create</button>
    </div>
  )
}

export default DeckCreate