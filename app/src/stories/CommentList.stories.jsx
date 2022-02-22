import React from 'react';
import CommentList from '../components/CommentList';

export default {
  title: 'CommentList',
  component: CommentList
}

const comments = [
  {
    id: 1,
    avatar: "https://i.imgur.com/LpaY82x.png",
    userName: "Bobby",
    content: "This is a comment.",
    likes: 20,
    timestamp: 1645483654553
  },
  {
    id: 2,
    avatar: "https://i.imgur.com/LpaY82x.png",
    userName: "Bobby's Twin",
    content: "This is another comment.",
    likes: 200,
    timestamp: 1645483650000
  }
];

export const Primary = () => <CommentList comments={comments}/>