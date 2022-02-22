import { action } from '@storybook/addon-actions';
import React from 'react';
import { useState } from 'react';
import { Button } from '../components/Buttons/Button';
import EditDialog from '../components/EditDialog';

export default {
  title: 'EditDialog',
  component: EditDialog
}



let state = 'EDIT'
const setState = (x) => {state = x};
export const DialogOnClick = () => {
  setTimeout(() => {setState("EDIT")}, 2000)
  return (

    <div>
      <EditDialog
        content="This is a comment"
        onSubmit={(input) => {
          alert(input);
          setState("DEFAULT");
        }}
        state={state}
        setState={setState}
      />
    </div>
  )
}
