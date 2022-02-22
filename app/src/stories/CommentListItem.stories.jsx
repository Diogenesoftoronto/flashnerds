import React from "react";
import CommentListItem from "../components/CommentListItem";

export default {
  title: 'CommentListItem',
  component: CommentListItem
}

const avatar = "https://i.imgur.com/LpaY82x.png";
const userName = "Bobby";
const content = "This is a comment.";
const likes = 20;
const timestamp = 1645483654553;

export const Primary = () => <CommentListItem
avatar={avatar}
userName={userName}
content={content}
likes={likes}
timestamp={timestamp}
/>
