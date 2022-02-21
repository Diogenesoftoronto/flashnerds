import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Likes(props) {
  const { likes } = props;


  const [likeCount, setLikeCount] = useState(likes);


  const clickLike = () => {
    setLikeCount(likeCount + 1);

  }

  // TODO: add helpers for updating likes

  return (
    <span className="likes-container">
      {/* flex */}
    <a onClick={clickLike}><FontAwesomeIcon icon="fa-solid fa-heart" /></a>
    <span className="like-counter">{likeCount}</span>
    </span>
  );
}