import { styled } from "@stitches/react";

export const Button = styled("button", {
  all: "unset",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0.1em 1em",
  fontSize: 20,
  lineHeight: 1,
  font: "bold",
  fontWeight: 600,
  height: 35,
  border: 20,

  variants: {
    variant: {
      primary: {
        backgroundColor: "#0a9396",
        color: "#e9d8a6",
        boxShadow: `0 2px 2px black`,
        "&:hover": { backgroundColor: "#e9d8a6", color: "#0a9396" },
        "&:focus": { boxShadow: `5 5 5 10px black` }
      }
    },

    defaultVariants: {
      variant: "primary"
    }
  }
});
