
import React from 'react';
import { Button } from '../components/Buttons/Button';

export default {
  title: 'Button',
  component: Button

}

export const Hello = () => <Button variant='primary' onClick={()=> alert('click')}> button</Button>