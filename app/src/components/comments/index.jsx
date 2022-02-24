import React from "React";
import useVisualMode from "../../hooks/useVisualMode";
import Form from "./Form";
import Error from "./Error";
import Status from "./Status";
// import CommentList from "./CommentList";
import DisplayComments from "./DisplayComments";
import { currentUser } from "../../context/useAuth";
import {postComment, deleteComment } from "../../context/AppDataContext"
import ShowComment from "./Show";
// define modes
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
  CONFIRM_DELETE,
  CONFIRM_SAVE,
  CONFIRM_EDIT,
  DELETE,
} = modes;

const Comment = (props) => {
  const { comment } = props;
  const { mode, transition, back } = useVisualMode(comment ? SHOW : EMPTY);
  const { userId, content, post_time, flashcardId } = comment;
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

  const createComponent = <Form currentUser={currentUser} onSave={save} />;

  const errorComponent = (
    <Error
      message="😱 ERROR! SOMETHING WENT WRONG WITH NERDY COMMENT 😱"
      onClose={() => back()}
    />
  );

  const savingComponent = (
    <Status message="🥸 Your Nerdy comment is being Saved...Unfortunately 🥸" />
  );

  const showComponent = <ShowComment {...comment} />;

  const emptyComponent = <DisplayComments onClick={() => transition(SHOW)} />;
  return mode === SHOW
    ? showComponent
    : mode === CREATE
    ? createComponent
    : mode === SAVING
    ? savingComponent
    : mode === EMPTY
    ? emptyComponent
    : // : mode === ERROR
      errorComponent;
};

export default Comment;
