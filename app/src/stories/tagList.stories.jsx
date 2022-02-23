import React from 'react';
import { TagList } from '../components/tag/tagList';

export default {
  title: 'TagList',
  component: TagList
}

export const Primary = () => <TagList tags={[
  {
    tagId: 1,
    text: "tag1",
  },
  {
    tagId: 2,
    text: "tag2",
  },
  {
    tagId: 3,
    text: "tag3",
  },
]}/>
