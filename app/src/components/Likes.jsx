import React, { useState } from 'react';
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
    <a onClick={clickLike}></a>
    <span className="like-counter">{likeCount}</span>
    </span>
  );
}