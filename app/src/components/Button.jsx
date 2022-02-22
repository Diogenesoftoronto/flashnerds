import React from "react";

/** 
 Button props:
 variant: default violet(not working though)

 this controls the style of the button

 example: <Button variant="red">Delete</Button>
  */


function Button (props) {
  const { color, label, action} = props;
   return (
      <button onClick={action} style={{color: color}}>
        {label}
      </button>
   );
}

export default Button;