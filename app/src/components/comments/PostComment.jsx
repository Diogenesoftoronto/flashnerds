import React from "react";
import { Button } from '../altButton';

const PostComments = (props) => {
  const { onClick } = props;
  return (
    <Button variant="wide" onClick={onClick}>
     🧐 Click here to Post a comment Nerd 🧐
    </Button>
  );
};

export default PostComments;