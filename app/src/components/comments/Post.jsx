import React from "react";
import useVisualMode from "../../hooks/useVisualMode";
import Form from "./Form";
import ErrorComponent from "./Error";
import Status from "./Status";
// import CommentList from "./CommentList";
import DisplayComments from "./DisplayComments";
// import { currentUser } from "../../context/useAuth";
// import { postComment, deleteComment } from "../../context/AppDataContext";
import ShowComment from "./Show";
import PostComments from "./PostComment";
// define modes
const currentUser = {
  userId: 1,
  name: "Nerd",
  avatar: "https://i.imgur.com/LpaY82x.png"
}

// make axios request from 
const deleteComment = (props) => setTimeout(console.log("deleteCOmment", props), 5000)
const postComment = (props) => {setTimeout(console.log("postComment", props),  5000 )}
const modes = {
  EMPTY: "EMPTY",
  SHOW: "SHOW",
  CREATE: "CREATE",
  SAVING: "SAVING",
  ERROR: "ERROR",
  CONFIRM_DELETE: "CONFIRM_DELETE",
  CONFIRM_SAVE: "CONFIRM_SAVE",
  CONFIRM_EDIT: "CONFIRM_EDIT",
  DELETE: "DELETE",
};
const {
  SHOW,
  CREATE,
  SAVING,
  ERROR,
  EMPTY,
  DELETE,
} = modes;

const PostComment = (props) => {
  const { comment } = props;
  const { mode, transition, back } = useVisualMode(comment ? SHOW : EMPTY);
  console.log(props)
  // const { userId, content, post_time, flashcardId } = comment;
  // create a save function
  //create delete function
  // create show, empty and saving components
  const save = (comment) => {
    // const comment = {
    //     userId,
    //     content,
    //     post_time,
    //     flashcardId
    // };
    transition(SAVING);
    postComment(comment)
      .then(() => transition(SHOW))
      .catch((error) => {
        transition(ERROR, true);
      });

    return;
  };

  const onDelete = () => {
    transition(DELETE, true);
    deleteComment()
      .then(() => transition(EMPTY))
      .catch((error) => {
        transition(ERROR, true);
      });
  };

  const postComponent = <PostComments onClick={() => transition(CREATE)}/>;
 

  const createComponent = <Form currentUser={currentUser} onSave={save} />;

  const errorComponent = (
    <ErrorComponent
      message="😱 ERROR! SOMETHING WENT WRONG WITH NERDY COMMENT 😱"
      onClose={() => back()}
    />
  );

  const savingComponent = (
    <Status message="🥸 Your Nerdy comment is being Saved...Unfortunately 🥸" />
  );

  const showComponent = <ShowComment comment={comment} user={currentUser}/>;

  return ( 
    mode === SHOW
    ? showComponent
    : mode === CREATE
    ? createComponent
    : mode === SAVING
    ? savingComponent
    : mode === EMPTY
    ? postComponent
    : errorComponent);
};

export default PostComment;
