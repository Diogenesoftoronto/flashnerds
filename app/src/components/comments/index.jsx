import React from "React";

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

const Comments = () => {
// create a save function
//create delete function
// create show, empty and saving components
const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);
    return(mode === SHOW
        ? showComponent
        : mode === CREATE
        ? createComponent
        : mode === SAVING
        ? savingComponent
        : mode === EMPTY
        ? emptyComponent
        : mode === ERROR
        : errorComponent})

}

export default Comments;