import React, { useState } from "react";
import { Button } from "./altButton";
import { styled } from "@stitches/react";
// could add font family and other styles here. decided to make it simple

const Comment = styled('div', {
  borderRadius: 4,
  margin: '10px 0',
  padding: 10,
  variants: {
    variant: {
      primary: {
        backgroundColor: "#0a9396",
        color: "#e9d8a6",
        boxShadow: `0 2px 2px black`
      }
    }
  }
});
export const createComment = () => {
  const [contentState, setContentState] = useState("");
  // need to be able to keep values, i think comments could really useTransition as they are identical to appointment except that they are even simpler
  return (
    <Comment variant="primary">
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
    <Button variant="primary">Post</Button>
    </Comment>
  );
};
