import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function DeckCreate () {
  const [imageUrl, setImageUrl] = useState("");
  const cloud_name = "dbbnv85af";
  const upload_preset = "daxonv2q";
  const handleClick = () => {
    const { files } = document.querySelector(".uploadInput");
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", upload_preset);
    const options = {
     method: "POST",
     body: formData,
    };
    return fetch(`https://api.Cloudinary.com/v1_1/${cloud_name}/image/upload`, options
   )
    .then((res) => res.json())
    .then((res) => {
      setImageUrl(res.secure_url);
     })
     .catch((err) => console.log(err));
   };

  // conat [deckTitle, setDeckTitle] = useState();
  // conat [image, setImage] = useState();
 
  const navigate= useNavigate();
  const handleBtnCreateClick = () => {
    const file = new FormData()
    file.append("Spanish");
    file.append("../public/books.png");
    axios
      .post('', file, 
      {
        header: {
          'content-type': 'multipart/form-data',
        },
      })
      .then(response => {
        console.log(response);
      })
    navigate("/mylibrary");
  };

  return (
    <div>
      <h1>Create New Deck</h1>
      <div>
        <label for="deckTitle">Enter Title</label>
        <input type="text" name="deckTitle" id="deckTitel" />
      </div>
      <div className="imageUpload">
        <input type="file" className="uploadInput" />
        <img src={imageUrl} className="uploadedImg" alt="" />
        <button className="uploadButton" onClick={handleClick}>Upload</button>
      </div>
      <button className="createButton" onClick={handleBtnCreateClick}>Create</button>
    </div>
  )
}

export default DeckCreate