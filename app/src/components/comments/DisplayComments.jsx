// import { Button } from "../components/altButton";
import React from "react";
import { Button } from '../altButton';

const DisplayComments = (props) => {
  const { onClick } = props;
  return (
    <Button variant="wide" onClick={onClick}>
      Show Comments
    </Button>
  );
};

export default DisplayComments;
