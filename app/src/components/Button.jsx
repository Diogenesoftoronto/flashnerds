import React from "react";
import "components/Button.scss"

//  first component! :grinning:
const Button = (props) => {
  const { text, stuff1,  } = props;
  return (
    <button>{text, stuff1}</button>
  )
}

export default Button