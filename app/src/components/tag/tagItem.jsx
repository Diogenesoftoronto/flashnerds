import React from 'react';
import {styled} from '@stitches/react'

export const Tag = styled("div", {
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
        boxShadow: `0 2px 2px black`
      }
    },
  }
});

export const TagItem = (props) => {
  const {text, tagId} = props;
    return (
      <Tag variant="primary" value={tagId}>
        {text}
      </Tag>
    )
};