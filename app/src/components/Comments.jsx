import React from 'react';
// import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

import { styled, keyframes } from '@stitches/react';
import * as Collapsible from '@radix-ui/react-collapsible';

const open = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-collapsible-content-height)' },
});

const close = keyframes({
  from: { height: 'var(--radix-collapsible-content-height)' },
  to: { height: 0 },
});

const CollapsibleContent = styled(Collapsible.Content, {
  overflow: 'hidden',
  '&[data-state="open"]': { animation: `${open} 300ms ease-out` },
  '&[data-state="closed"]': { animation: `${close} 300ms ease-out` },
});