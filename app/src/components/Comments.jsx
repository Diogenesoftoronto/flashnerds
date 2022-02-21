import React from 'react';
import { styled, keyframes } from '@stitches/react';
import { violet, blackA } from '@radix-ui/colors';
import { RowSpacingIcon, Cross2Icon } from '@modulz/radix-icons';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';


const StyledCollapsible = CollapsiblePrimitive.Root;

// transition 
const open = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-collapsible-content-height)' },
});

const close = keyframes({
  from: { height: 'var(--radix-collapsible-content-height)' },
  to: { height: 0 },
});


// Exports
export const Collapsible = StyledCollapsible;
export const CollapsibleTrigger = CollapsiblePrimitive.Trigger;
export const CollapsibleContent = styled(CollapsiblePrimitive.Content, {
  overflow: 'hidden',
  '&[data-state="open"]': { animation: `${open} 300ms ease-out` },
  '&[data-state="closed"]': { animation: `${close} 300ms ease-out` },
});


const Flex = styled('div', { display: 'flex' });
const Text = styled('span', {
  color: violet.violet11,
  fontSize: 15,
  lineHeight: '25px',
});

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: violet.violet11,
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  '&[data-state="closed"]': { backgroundColor: 'white' },
  '&[data-state="open"]': { backgroundColor: violet.violet3 },
  '&:hover': { backgroundColor: violet.violet3 },
  '&:focus': { boxShadow: `0 0 0 2px black` },
});

// Will make this a placeholder for comment component
const Comment = styled('div', {
  backgroundColor: 'white',
  borderRadius: 4,
  margin: '10px 0',
  padding: 10,
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
});

const Comments = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{width: '300px'}}>

    <Collapsible open={open} onOpenChange={setOpen}>
      <Flex css={{ alignItems: 'center', justifyContent: 'space-between' }}>
        {/* have a form for writing a comment */}
        <Text css={{ color: 'white' }}>View Comments</Text>
        <CollapsibleTrigger asChild>
          <IconButton>{open ? <Cross2Icon /> : <RowSpacingIcon />}</IconButton>
        </CollapsibleTrigger>
      </Flex>

      <Comment><Text>Comments</Text></Comment>
      <CollapsibleContent>
      <Comment>
        <Text>Comment 1</Text>
      </Comment>
      <Comment>
        <Text>Comment 2</Text>
      </Comment>
      <Comment>
        <Text>Comment 3</Text>
      </Comment>
      </CollapsibleContent>
    </Collapsible>
    </div>
  );
};

export default Comments;
