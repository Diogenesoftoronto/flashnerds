import { action } from '@storybook/addon-actions';
import React from 'react';
import FlashcardPost from '../components/FlashcardPost';

export default {
  title: 'FlashcardPost',
  component: FlashcardPost
}


const comments = [
  {
    id: 1,
    avatar: "https://i.imgur.com/LpaY82x.png",
    userName: "Bobby",
    content: "This is a comment.",
    likes: 20,
    timestamp: 1645483654553
  },
  {
    id: 2,
    avatar: "https://i.imgur.com/LpaY82x.png",
    userName: "Bobby's Twin",
    content: "This is another comment.",
    likes: 200,
    timestamp: 1645483650000
  }
];

const question = "Question";
const answer  = "Answer";
const likes = 0;

export const Primary = () => <FlashcardPost
question={question}
answer={answer}
likes={likes}
onBack={action("onBack")}
onNext={action("onNext")}
comments={comments}
/>