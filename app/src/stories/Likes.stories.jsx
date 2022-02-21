import React from 'react';
import Likes from '../components/Likes';

export default {
  title: 'Likes',
  component: Likes
};

const likes = 31;

export const Primary = () => <Likes likes={likes}/>