import React from "react";
import Comment from "./index";
// const comments = [
//   {
//     user: {
//       userId: 1,
//       avatar: "image",
//       name: "dudebro",
//     },
//     comment: {
//       commentId: 1,
//       post_time: "asdfsadfsdfasfds",
//       content: "dude what a nerd",
//     },
//   },
//   {},
// ];
const CommentList = (props) => {
  const { comments } = props;
  const CommentMap = comments.map((comment) => <Comment {...comment} />);
  let render = !comments ? (<img src="%PUBLIC_URL%/nocomments.jpg" alt="no comments???">🤮</img>) : CommentMap
  return { render };
};

export default CommentList;
