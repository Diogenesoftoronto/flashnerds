import React from "react";
import "components/Button.scss";

function Button(props) {
  const { color, label, action} = props;
   return (
      <button onClick={action} style={{color: color}}>
        {label}
      </button>
   );
}

export default Button;