import React from "React";
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
  return { CommentMap };
};

export default CommentList;
