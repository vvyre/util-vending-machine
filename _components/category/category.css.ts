import { style } from '@vanilla-extract/css';

export const WRAPPER = style({
  width: '7.5rem',
  gap: '0.25rem',
  display: 'flex',
  position: 'absolute',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  bottom: '0',
  right: '0',
  padding: '1rem',
});

export const MENU = style({
  width: '7.5rem',
  gap: '0.1rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'stretch',
});
