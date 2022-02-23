import React, {useState} from 'react';
import { styled } from '@stitches/react'
import { Pencil2Icon } from '@radix-ui/react-icons';

export const tbd = styled("div", {})

export const AnswerForm = () => {
  const [answerState, setAnswerState] = useState('');
  return(
  <form autoComplete="off" onSubmit={event => event.preventDefault()}>
    <input type="text" name="answer" placeholder="What's your guess nerd?"
    onChange={event => setAnswerState(event.target.value)}
    value={answerState} />
  </form>
  ) 
} 