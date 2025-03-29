import { styled } from '~/stitches.config';
import { COLORS } from './_colors.css';

export const Input = styled('input', {
  border: `1px solid ${COLORS.GRAY_400}`,
  borderRadius: '0.5rem',
  height: '3rem',
  padding: '0 1rem 0 1rem',
  width: '100%',
  maxWidth: '36rem',
  fontSize: '1.1rem',
  color: COLORS.TEXT,
  '::placeholder': {
    color: COLORS.GRAY_400,
  },
  '&:focus': {
    border: `1px solid ${COLORS.GRAY_900}`,
    outlineOffset: '0.25rem',
    outline: `1.5px solid ${COLORS.GRAY_900}`,
  },
});

export const MonoSpaceInput = styled('input', {
  border: `1px solid ${COLORS.GRAY_400}`,
  borderRadius: '0.5rem',
  height: '3rem',
  fontSize: '1rem',
  padding: '0 1rem 0 1rem',
  fontFamily: '"Space Mono", monospace',
  width: '100%',
  maxWidth: '36rem',
  color: COLORS.TEXT,
  '::placeholder': {
    color: COLORS.GRAY_400,
  },
  '&:focus': {
    border: `1px solid ${COLORS.GRAY_900}`,
    outlineOffset: '0.3rem',
    outline: `1.5px solid ${COLORS.GRAY_900}`,
  },
});
