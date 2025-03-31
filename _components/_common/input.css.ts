// input.css.ts
import { style } from '@vanilla-extract/css';
import { COLORS } from './_colors';

const BASE = style({
  border: `1px solid ${COLORS.GRAY_400}`,
  borderRadius: '0.5rem',
  height: '3rem',
  padding: '0 1rem 0 1rem',
  width: '100%',
  maxWidth: '36rem',
  fontSize: '1.1rem',
  color: COLORS.TEXT,
  selectors: {
    '&::placeholder': {
      color: COLORS.GRAY_400,
    },
    '&:focus': {
      border: `1px solid ${COLORS.GRAY_900}`,
      outlineOffset: '0.3rem',
      outline: `1.5px solid ${COLORS.GRAY_900}`,
    },
  },
});

export const INPUT = style([BASE, {}]);

export const MONOSPACE_INPUT = style([
  INPUT,
  {
    fontFamily: '"Space Mono", monospace',
  },
]);
