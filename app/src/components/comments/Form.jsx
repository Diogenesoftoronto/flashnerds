import React, { useState } from "react";
import { Button } from "./altButton";
import { styled } from "@stitches/react";
// could add font family and other styles here. decided to make it simple

const Comment = styled("div", {
  borderRadius: 4,
  margin: "10px 0",
  padding: 10,
  variants: {
    variant: {
      primary: {
        backgroundColor: "#0a9396",
        color: "#e9d8a6",
        boxShadow: `0 2px 2px black`,
      },
    },
  },
});
const currentUser = {
  userId: 1,
};

export const createComment = () => {
  const [contentState, setContentState] = useState("");
  const { onSave, currentUser } = props;
  const [error, setError] = useState("");
  function validate() {
    if (!contentState) {
      setError("Nerdy comments aren't blank!");
      return;
    }
    setError("");
    onSave(contentState);
  }
  // need to be able to keep values, i think comments could really useTransition as they are identical to comment except that they are even simpler
  return (
    <Comment
      value={currentUser.userId}
      variant="primary"
      className="comment__card comment__card--create"
    >
      <section className="comment__card-left">
        <h2>Create Comment</h2>
        <form onSubmit={(event) => event.preventDefault()}>
          <input
            type="text"
            name="content"
            placeholder="What do you have to say for yourself Nerd?"
            onChange={(event) => setContentState(event.target.value)}
            value={contentState}
          />
        </form>
      </section>
      <Button variant="primary" onClick={() => validate()}>
        Post
      </Button>
    </Comment>
  );
};
