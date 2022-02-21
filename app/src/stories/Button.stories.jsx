import { action } from '@storybook/addon-actions';
import React from 'react';
import { Button } from '../components/Buttons/Button';

export default {
  title: 'Button',
  component: Button
}

export const Red = () => <Button variant='red' onClick={()=> alert('click')}> button</Button>