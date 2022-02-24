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
  // console.log(comments)
  let render = comments[0] ? comments.map((comment) => {
  // console.log(comment)
  return <Comment comment={comment} />}) : (<img src="/nocomments.jpg" alt="no comments???"/>);
  return (render) ;
};

export default CommentList;
