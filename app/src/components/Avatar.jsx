import React from 'react';
import { styled } from '@stitches/react';
import { violet, blackA } from '@radix-ui/colors';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 45,
  height: 45,
  borderRadius: '100%',
  backgroundColor: blackA.blackA3,
});

const StyledImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: violet.violet11,
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});

// Exports
export const AvatarContainer = StyledAvatar;
export const AvatarImage = StyledImage;
export const AvatarFallback = StyledFallback;

// Your app...
const Flex = styled('div', { display: 'flex' });

const AvatarDemo = (props) => {
  const {name, img } = props

 function nameToInitials() {
   const split = name.toUpperCase().split(" ");
   let initials = '';

   for (let i = 0; i < 2 &&  i < split.length; i++) {
    initials += split[i][0];
   }

   return initials;
 }

  return (
    <AvatarContainer>
      <AvatarImage
        src={img}
        alt={name}
      />
      <AvatarFallback delayMs={600}>{nameToInitials()}</AvatarFallback>
    </AvatarContainer>
);}

export default AvatarDemo;

