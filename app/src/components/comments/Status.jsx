import React from "react";

const Status = (props) => {
  const { message } = props;
  return (
    <main className="comment__card comment__card--status">
      <img
        className="comment__status-image"
        src="%PUBLIC_URL%/status.png"
        alt="Loading"
      />
      <h1 className="text--semi-bold">{message}</h1>
    </main>
  );
};

export default Status;
