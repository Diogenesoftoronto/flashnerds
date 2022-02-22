import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Button } from './Buttons/Button'


export default function Likes(props) {
  const { likes } = props;


  const [likeCount, setLikeCount] = useState(likes);


  const clickLike = () => {
    setLikeCount(likeCount + 1);
  }

  // TODO: add helpers for updating likes

  return (
    <span className="likes-container" >
    <Button variant='pink' onClick={clickLike}>
    {likeCount}<br/>
    <i className="fa-solid fa-heart"></i>
      </Button>
    <span className="like-counter"></span>
    </span>
  );
}