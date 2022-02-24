import React from "react";
// import { styled } from "@stitches/react";

// const ErrorDiv = styled("div", {});

const ErrorComponent = (props) => {
  const { message, onClose } = props;
  return (
    <main className="comment__card comment__card--error">
      <section className="comment__error-message">
        <h1 className="text--semi-bold">Error</h1>
        <h3 className="text--light">{message}</h3>
      </section>
      <img
        onClick={onClose}
        className="comment__error-close"
        src="images/close.png"
        alt="Close"
      />
    </main>
  );
};
export default ErrorComponent;