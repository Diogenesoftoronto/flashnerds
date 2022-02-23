import React from 'react';
import { styled } from '@stitches/react';
import { TagItem } from './tagItem';

export const TagSection = styled("div", {
  all: "unset",
  display: "flex",
  justifyContent: "flex-start",
  alignContent: "flex-start",
  margin: "10px",
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
  const { tags } = props
  console.log("tags", props.tags);
  const tagMap = tags.map((tag) => {
  return (<TagItem tagId={tag.tagId} text={tag.text}/>)
});
 if(tags) return(
    <TagSection variant="primary">
      {tagMap}
    </TagSection>
    )
  else return(
    <TagSection variant="primary">
      No tags
    </TagSection>
  )
};