import React , { useState, useEffect } from 'react';
import { format } from 'timeago.js';

export default function Comment(props) {
  const {
    avatar,
    userName,
    content,
    timestamp
  } = props;

  // we may need helper functions for processing timestamps between pg and js
  const timeago = (date) => format(Date.now() - timestamp);

  // state for timeago
  const [time, setTime] = useState(timeago(timestamp));

  // state to update comment timeago
  const [isHover, setIsHover] = useState(false);
  useEffect(() => {
    setTime(timeago(timestamp));
  }, [isHover]);

  return (
    <div className="comment" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <header>
        <img src={avatar} />
        <h5>{userName}</h5>
      </header>
      <div className="comment-content">
        {content}
      </div>
      <footer>{time}</footer>
    </div>
  );
}