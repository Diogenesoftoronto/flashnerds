// create story for Avatar component
import React from 'react';
import Avatar from '../components/Avatar';
const props = {
  // roboto link
  avatar: 'https://robohash.org/temp',
  name: 'Bobby',
}
export default {
  title: 'Avatar',
  component: Avatar
}

export const Primary = () => { return <Avatar {...props}/> }