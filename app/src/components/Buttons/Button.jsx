import React from "react";

import { styled } from "@stitches/react";
import { violet, blackA, mauve, green, red, pink } from "@radix-ui/colors";


/** 
 Button props:
 variant: default violet(not working though)

 this controls the style of the button

 example: <Button variant="red">Delete</Button>
  */

export const Button = styled("button", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 15px",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,

  variants: {
    variant: {
      primary: { 
      backgroundColor: "#0a9396",
      color: "005f73",
      boxShadow: `0 2px 10px ${blackA.blackA7}`,
      "&:hover": { backgroundColor: "#e9d8a6" },
      "&:focus": { boxShadow: `0 0 0 2px black` }
    },
      violet: {
        backgroundColor: "white",
        color: violet.violet11,
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        "&:hover": { backgroundColor: mauve.mauve3 },
        "&:focus": { boxShadow: `0 0 0 2px black` }
      },
      red: {
        backgroundColor: red.red4,
        color: red.red11,
        '&:hover': { backgroundColor: red.red5 },
        '&:focus': { boxShadow: `0 0 0 2px ${red.red7}` },
      },
      green: {
        backgroundColor: green.green4,
        color: green.green11,
        "&:hover": { backgroundColor: green.green5 },
        "&:focus": { boxShadow: `0 0 0 2px ${green.green7}` }
      },
      mauve: {
        backgroundColor: mauve.mauve4,
        color: mauve.mauve11,
        '&:hover': { backgroundColor: mauve.mauve5 },
        '&:focus': { boxShadow: `0 0 0 2px ${mauve.mauve7}` }
      },
      pink: {
        backgroundColor: pink.pink4,
        color: pink.mauve11,
        '&:hover': { backgroundColor: pink.pink5 },
        '&:focus': { boxShadow: `0 0 0 2px ${pink.pink7}` }
      }
    },

    defaultVariants: {
      variant: "violet"
    }
  }
});

export const IconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 25,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: violet.violet11,
  position: "absolute",
  top: 10,
  right: 10,

  "&:hover": { backgroundColor: violet.violet4 },
  "&:focus": { boxShadow: `0 0 0 2px ${violet.violet7}` }
});
export const cButton = (props) => {
  const { theme, text, action} = props;
    return (
        <Button onClick={action} variant={theme}>
          {text}
        </Button>
    );
    }