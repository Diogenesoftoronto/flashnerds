import React , { useState, useEffect } from 'react';
import { format } from 'timeago.js';
import Likes from './Likes';
import EditDeleteMenu from './EditDeleteMenu';
import EditDialog from './EditDialog';
import AlertDelete from './AlertDelete';
import { Avatar } from '@radix-ui/react-avatar';

const EDIT = 'EDIT';
const DELETE = 'DELETE';
const DEFAULT = 'DEFAULT';

export default function CommentListItem(props) {
  const {
    avatar,
    userName,
    content,
    timestamp,
    likes,
    onRemove,
    onEdit
  } = props;


  const [contentValue, setContentValue] = useState(content);

  // we may need helper functions for processing timestamps between pg and js
  const timeago = () => format(timestamp);

  // state for timeago
  const [time, setTime] = useState(timeago(timestamp));

  // state to update comment timeago
  const [isHover, setIsHover] = useState(false);
  useEffect(() => {
    setTime(timeago(timestamp));
  }, [isHover]);

  const [state, setState] = useState(DEFAULT);

  const edit = () => {
    setState(EDIT);
    onEdit();
  }

  const remove = () => {
    setState(DELETE);
    onRemove();
  }
  return (
    <div className="comment" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <header>
        <div className="handle">
        <Avatar name={userName} avatar={avatar}/>
        <h5>{userName}</h5>
        </div>
        <EditDeleteMenu
          onEdit={() => setState(EDIT)}
          onDelete={() => setState(DELETE)}
        />
        <EditDialog
          state={state}
          setState={setState}
          content={content}
          onSubmit={setContentValue}
        />
        <AlertDelete
          state={state}
          setState={setState}
          onDelete={()=> onRemove()}
        />
      </header>
      <div className="comment-content">
        {contentValue}
      </div>
      <footer>
        <span className='comment-time'>
        {time}
        </span>
        <Likes likes={likes}/>
        </footer>
        
    </div>
  );
}