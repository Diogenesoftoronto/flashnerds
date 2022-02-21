import { action } from '@storybook/addon-actions';
import React from 'react';
import FlashcardPost from '../components/FlashcardPost';

export default {
  title: 'FlashcardPost',
  component: FlashcardPost
}


const question = "Question";
const answer  = "Answer";
const likes = 0;

export const Primary = () => <FlashcardPost
question={question}
answer={answer}
likes={likes}
onBack={action("onBack")}
onNext={action("onNext")}
/>