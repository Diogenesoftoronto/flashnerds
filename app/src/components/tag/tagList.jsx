import React from 'react';
import { styled } from '@stitches/react';
import { TagItem } from './tagItem';

export const TagSection = styled("div", {
  all: "unset",
  display: "flex",
  justifyContent: "flex-start",
  alignContent: "flex-start",
  padding: "10px",
  border: "0 0 1px solid",
  variant: {
    variant: {
      primary: {
        backgroundColor: "beige",
        boxShadow: `0 2px 2px black`,
      }
    }
  }
});

export const TagList = (props) => {
const {tags} = props;
const tagMap = tags.map((tag) => {
  return (<TagItem key={tag.id} tagId={tag.id} text={tag.text}/>)
});
  return(
    <TagSection variant="primary">
      {tagMap}
    </TagSection>
    )
};